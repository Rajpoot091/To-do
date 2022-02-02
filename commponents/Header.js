import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default Header = ({ text }) => {
  const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop: 38,
      backgroundColor: "blue",
    },

    list: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  console.log(text);
  return (
    <View style={styles.header}>
      <Text style={styles.list}>Todo List</Text>
    </View>
  );
};
