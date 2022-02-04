import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./commponents/Header";
import TodoList from "./commponents/todoList";
import AddTodos from "./commponents/addTodo";
import SandBox from "./commponents/sandbox";

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
    if (text.length >= 3) {
      setTodos((prevTodos) => {
        return [
          { name: text, key: Math.random() * (100 - 10).toString() },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("Ooops", "Todo must be greater than 3 Character", [
        {
          text: "Undetstood",
        },
      ]);
    }
  };

  return (
    // <SandBox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,

    padding: 30,
  },
  list: {
    flex: 1,
    marginTop: 20,
    fontWeight: "bold",
  },
});
