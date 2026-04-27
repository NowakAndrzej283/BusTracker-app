import * as FileSystem from "expo-file-system/legacy";
import JSZip from "jszip";
import { getDB } from "./db";
import parseCSV from "./parserCSV";

export async function fetchSchedule() {
  const db = await getDB();

  const zipPath = FileSystem.documentDirectory + "data.zip";

  const result = await FileSystem.downloadAsync(
    "https://www.ztm.poznan.pl/pl/dla-deweloperow/getGTFSFile",
    zipPath
  );

  const base64 = await FileSystem.readAsStringAsync(result.uri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  const zip = await JSZip.loadAsync(base64, { base64: true });

  const routesFile = zip.files["routes.txt"];
  if (!routesFile) return;

  const text = await routesFile.async("string");
  const routes = parseCSV(text);

  await db.execAsync("BEGIN");

  try {
    for (const route of routes) {
      await db.runAsync(
        `
        INSERT OR REPLACE INTO routes
        (route_id, route_short_name, route_long_name, route_color, route_type)
        VALUES (?, ?, ?, ?, ?)
        `,
        [
          route.route_id,
          route.route_short_name,
          route.route_long_name,
          route.route_color,
          route.route_type
        ]
      );
    }

    await db.execAsync("COMMIT");
  } catch (e) {
    await db.execAsync("ROLLBACK");
    throw e;
  }
}
    
  
  