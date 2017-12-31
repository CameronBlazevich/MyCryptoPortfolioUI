import React from "react";
import { View, StyleSheet, Text } from "react-native";

function NavBar(props) {
  return (
    <View style={styles.navBar}>
      <Text style={styles.title}> $$ My Crypto Portfolio</Text>
    </View>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  navBar: { height: 50, backgroundColor: "black", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold", color: "white" }
});
