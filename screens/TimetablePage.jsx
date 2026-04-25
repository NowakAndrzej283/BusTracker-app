import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getDB } from "../services/db";
import BusLineCard from "../components/BusLineCard";



export default function TimetablePage({navigation, data}) {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    async function loadRoutes() {
      const db = await getDB();

      const data = await db.getAllAsync(
        "SELECT * FROM routes"
      );

      setRoutes(data);
    }

    loadRoutes();
  }, []);


  return (
    <FlatList
        data={routes}
        keyExtractor={(item) => item.route_id}
        renderItem={({ item }) => (
    <BusLineCard route_id={item.route_id} 
        route_color={item.route_color} 
        route_short_name={item.route_short_name}
        route_long_name={item.route_long_name}
        />
  )}
/>
  );
}