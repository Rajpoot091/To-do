import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function TodoList({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.list}>
        <MaterialIcons name="delete" size={23} />
        <Text style={styles.item}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
    flexDirection: "row",
    borderColor: "#bbb",
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  item: {
    paddingLeft: 10,
  },
});
