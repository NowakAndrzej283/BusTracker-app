import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import * as SQLite from 'expo-sqlite';

import { db } from '../services/db';
import TransportTypeBar from '../components/TransportTypeBar';

export default function TimetablePage({navigation, data}){
    const [routes, setRoutes] = useState([]);

    useEffect(()=>{
        if(routes){
            loadRoutes();
        }
        return console.log('clean up');
    },[])
 
    async function loadRoutes() {
        const db = await SQLite.openDatabaseAsync('gtfs.db');
    
        const result = await db.getAllAsync(
          `SELECT route_id, route_short_name, route_long_name
           FROM routes
           ORDER BY route_short_name`
        );
    
        setRoutes(result);
      }


    return (
        <View style={styles.rootContainer}>
            <TransportTypeBar data={routes}/>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    }
})