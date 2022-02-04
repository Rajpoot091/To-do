import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 50,
    backgroundColor: "#ddd",
  },

  boxOne: {
    // fontSize: 20,
    fontWeight: "bold",
    padding: 40,
    backgroundColor: "coral",
  },
  boxTwo: {
    // fontSize: 20,
    padding: 30,
    fontWeight: "bold",
    backgroundColor: "gold",
  },
  boxThree: {
    // fontSize: 20,
    padding: 20,
    fontWeight: "bold",
    backgroundColor: "skyblue",
  },
  boxFour: {
    // fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "violet",
  },
});
