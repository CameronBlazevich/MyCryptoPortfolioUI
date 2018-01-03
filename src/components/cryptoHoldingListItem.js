import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image
} from "react-native";
import PropTypes from "prop-types";

function CryptoHoldingListItem(props) {
  return (
    <TouchableHighlight onPress={props.onTouch}>
      <View style={styles.listItem}>
        <View style={[styles.listItemSection, styles.logo]}>
          <Image
            style={{ height: 35, width: 35 }}
            source={require("../icons/bitcoin_color.png")}
          />
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
    </TouchableHighlight>
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
  logo: { flex: 1, justifyContent: "center", alignItems: "center" },
  coinInfo: { flex: 3 },
  ownedSection: { flex: 3 },
  labelText: { fontSize: 14, fontWeight: "100" },
  field: { fontSize: 14, fontWeight: "500" },
  coinName: { fontSize: 16, fontWeight: "bold" }
});
