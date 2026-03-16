import * as FileSystem from 'expo-file-system/legacy';
import JSZip from 'jszip';
import * as SQLite from 'expo-sqlite';

import { db, DB_FLAG } from './db';
import parseCSV from './parserCSV';


export const fetchSchedule = async () => {

    //const db = SQLite.openDatabaseSync('gtfs.db');

    // download the zip from api
    const url = `https://www.ztm.poznan.pl/pl/dla-deweloperow/getGTFSFile`

    const zipPath = FileSystem.documentDirectory + 'data.zip';

    const result = await FileSystem.downloadAsync(
        `https://www.ztm.poznan.pl/pl/dla-deweloperow/getGTFSFile`,
        zipPath
    );

    console.log('ZIP saved in: ', zipPath);

    const base64 = await FileSystem.readAsStringAsync(result.uri, {
        encoding: FileSystem.EncodingType.Base64
    });

    console.log('base64 to ', zip);

    // unpack the zip
    const zip = await JSZip.loadAsync(base64, {base64: true});

    const routesFile = zip.files['routes.txt'];

    if (routesFile && !DB_FLAG) {
      const text = await routesFile.async("string");        // odczyt pliku jako string
      const routes = parseCSV(text);                        // parsowanie CSV do obiektów
    
      console.log('inside routesFile parsing...');
      for (const route of routes) {
        await db.runAsync(
          `INSERT OR REPLACE INTO routes
          (route_id, route_short_name, route_long_name)
          VALUES (?, ?, ?)`,
          [route.route_id, route.route_short_name, route.route_long_name]
        );
      }
    }

   
    













    // const data = {};

    // for(let filename of Object.keys(zip.files)) {
    //     const content = await zip.files[filename].async("string");
    //     data[filename] = parseCSV(content);
    //   }


    // console.log('final data is :', data);

    // return data;

  };
  
  
  
  