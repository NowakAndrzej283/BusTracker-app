import * as SQLite from "expo-sqlite";

let database = null;

export async function getDB() {
  if (!database) {
    database = await SQLite.openDatabaseAsync("gtfs.db");

    await database.execAsync(`
      CREATE TABLE IF NOT EXISTS routes (
        route_id TEXT PRIMARY KEY,
        route_short_name TEXT,
        route_long_name TEXT,
        route_color TEXT,
        route_type NUMBER
      );
    `);
  }

  return database;
}