import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function Footer(props) {
  return (
    <View style={styles.container}>
      <View style={styles.addHoldingContainer}>
        <Image
          style={{ height: 55, width: 55 }}
          source={require("../icons/if_Coin-S-add_1952458.png")}
        />
      </View>
      <View style={styles.totalsContainer}>
        <Text style={styles.title}>Total Value:</Text>
        <Text style={styles.text}>$1000</Text>
      </View>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 15,
    backgroundColor: "black",
    flexDirection: "row"
  },
  addHoldingContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
    //alignItems: "center"
  },
  totalsContainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  title: { fontSize: 20, fontWeight: "bold", color: "white" },
  text: { color: "white" }
});
