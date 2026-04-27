import React from "react";
import { memo } from "react";
import { View, Text, StyleSheet } from "react-native";

function BusLineCard({route_id, route_short_name, route_long_name, route_color}) {
  const lineColor = route_color
    ? `#${route_color}`
    : "#2B58FF";

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.badge,
          { backgroundColor: lineColor }
        ]}
      >
        <Text style={styles.lineNumber}>
          {route_short_name}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.lineName}>
          {route_long_name}
        </Text>

        <Text style={styles.lineId}>
          ID: {route_id}
        </Text>
      </View>
    </View>
  );
}
export default memo(BusLineCard);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0B1220",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)"
  },

  badge: {
    width: 64,
    height: 64,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14
  },

  lineNumber: {
    color: "white",
    fontSize: 22,
    fontWeight: "700"
  },

  info: {
    flex: 1
  },

  lineName: {
    color: "#E6E9FF",
    fontSize: 16,
    fontWeight: "600"
  },

  lineId: {
    marginTop: 4,
    color: "rgba(230,233,255,0.55)",
    fontSize: 12
  }
});