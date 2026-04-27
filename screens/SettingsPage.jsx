import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTransport } from "../services/TransportContext";

const SettingsScreen = () => {
  const { transportType, setTransportType } = useTransport();

  const options = [
    { label: "Tram 🚋", value: "tram" },
    { label: "Bus 🚌", value: "bus" },
    { label: "Train 🚆", value: "train" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the mean of transportation</Text>

      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.option,
            transportType === option.value && styles.activeOption,
          ]}
          onPress={() => setTransportType(option.value)}
        >
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  option: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    marginBottom: 12,
    borderWidth: 1,
    elevation: 10
    
  },
  activeOption: {
    borderWidth: 2,
    borderColor: "#2563EB",
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingsScreen;