import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

function CryptoHoldingListItem(props) {
  return (
    <View style={styles.listItem}>
      <View style={[styles.listItemSection, styles.logo]}>
        <Text>LOGO</Text>
      </View>
      <View style={[styles.listItemSection, styles.coinInfo]}>
        <Text>{props.coinName}</Text>
        <Text>{props.currentPrice}</Text>
      </View>
      <View style={[styles.listItemSection, styles.ownedSection]}>
        <Text>Value: {props.Value}</Text>
        <Text>Amount Owned: {props.amountOwned}</Text>
      </View>
    </View>
  );
}

export default CryptoHoldingListItem;

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black"
  },
  listItemSection: { flexDirection: "column" },
  logo: { flex: 1 },
  coinInfo: { flex: 2 },
  ownedSection: { flex: 2 }
});
