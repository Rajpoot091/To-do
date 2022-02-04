import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoList({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.list}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
    borderColor: "#bbb",
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
