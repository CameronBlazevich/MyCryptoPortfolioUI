import React from "react";
import { View, StyleSheet } from "react-native";

function StatusBarBuffer(props) {
  return <View style={styles.statusBarBuffer} />;
}

export default StatusBarBuffer;

const styles = StyleSheet.create({
  statusBarBuffer: { height: 30, backgroundColor: "black" }
});
