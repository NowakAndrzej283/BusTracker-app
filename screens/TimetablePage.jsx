import React, { useEffect, useState, useCallback } from "react";
import { FlatList } from "react-native";
import { getDB } from "../services/db";
import BusLineCard from "../components/BusLineCard";
import { useTransport } from "../services/TransportContext";

export default function TimetablePage({navigation, data}){
  const [routes, setRoutes] = useState([]);
  const { transportType } = useTransport();

  const transportMap = {
    tram: 0,
    bus: 3,
    train: 2,
  };

  useEffect(() => {
    async function loadRoutes() {
      const db = await getDB();

      const routeType = transportMap[transportType];

      const data = await db.getAllAsync(
        "SELECT * FROM routes WHERE route_type = ?",
        [routeType]
      );

      setRoutes(data);
    }

    loadRoutes();
  }, [transportType]);

  const renderItem = useCallback(
    ({ item }) => (
      <BusLineCard
        route_id={item.route_id}
        route_color={item.route_color}
        route_short_name={item.route_short_name}
        route_long_name={item.route_long_name}
      />
    ),
    []
  );

  return (
    <FlatList
      data={routes}
      keyExtractor={(item) => item.route_id.toString()}
      renderItem={renderItem}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
      removeClippedSubviews={true}
    />
  );
}