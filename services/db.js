import * as SQLite from 'expo-sqlite';
import AsyncStorage from "@react-native-async-storage/async-storage";


export let db;
export let DB_FLAG;

export async function initDB(){
    
    DB_FLAG = 'isInitialized';
    if(DB_FLAG){
        return;
    }
    db = await SQLite.openDatabaseAsync('gtfs.db');
 
    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS routes (
      route_id TEXT PRIMARY KEY,
      route_short_name TEXT,
      route_long_name TEXT
    );
    `);

    return 'everything is good';
}