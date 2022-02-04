import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./commponents/Header";
import TodoList from "./commponents/todoList";
import AddTodos from "./commponents/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { name: "work", key: "1" },
    { name: "Browse", key: "2," },
    { name: "jim", key: "3" },
    { name: "study", key: "4" },
    { name: "go to bed", key: "5" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ name: text, key: Math.random.toString() }, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddTodos submitHandler={submitHandler} />

      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoList item={item} pressHandler={pressHandler} />
            )}
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
