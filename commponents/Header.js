import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.list}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 28,
    backgroundColor: "coral",
  },

  list: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
