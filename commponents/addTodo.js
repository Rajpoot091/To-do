import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodos({ submitHandler }) {
  const [text, setText] = useState("");

  const handleSubmit = (val) => {
    setText(val);
    // setText(null);
  };

  return (
    <View style={styles.ViewStyle}>
      <TextInput
        style={styles.input}
        placeholder="Add Todos..."
        onChangeText={handleSubmit}
      />
      <Button
        style={styles.Button}
        onPress={() => {
          submitHandler(text);
        }}
        title="Add Todo"
        color={"coral"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    padding: 20,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    // marginLeft: 20,
    // marginRight: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  Button: {
    // padding: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
