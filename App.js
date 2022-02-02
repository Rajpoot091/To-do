import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./commponents/Header";
// import Headers from "./commponents/Header";

export default function App() {
  const [todos, newTodos] = useState([
    { name: "work", key: "1" },
    { name: "Browse", key: "2," },
    { name: "jim", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      <Header text="Hello Asad" />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />

          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  content: {
    padding: 30,
  },
  list: {
    marginTop: 20,
    fontWeight: "bold",
  },
});
