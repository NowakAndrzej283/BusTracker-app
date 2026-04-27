import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ActivityIndicator size="large" color="#2563EB"/>
        <Text style={styles.text}>Loading Schedule...</Text>
        <Text style={styles.subText}>Ready to explore Poznań?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
  card: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  text: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "600",
    color: "#1E293B",
  },
  subText: {
    marginTop: 6,
    fontSize: 14,
    color: "#64748B",
  },
});

export default LoadingScreen;