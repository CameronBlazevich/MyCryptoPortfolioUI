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
        <Text style={styles.coinName}>
          {props.coinName} ({props.tickerSymbol})
        </Text>
        <Text>{props.currentPrice}</Text>
      </View>
      <View style={[styles.listItemSection, styles.ownedSection]}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.labelText}>Owned:</Text>
          <Text style={styles.field}> {props.amountOwned}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.labelText}>Value:</Text>
          </View>
          <View>
            <Text style={styles.field}> {props.value}</Text>
          </View>
        </View>
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
  coinInfo: { flex: 3 },
  ownedSection: { flex: 3 },
  labelText: { fontSize: 14, fontWeight: "100" },
  field: { fontSize: 14, fontWeight: "500" },
  coinName: { fontSize: 16, fontWeight: "bold" }
});
