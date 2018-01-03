import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CryptoHoldingListItem from "./cryptoHoldingListItem";

function CryptoHoldingList(props) {
  //console.log(props);
  renderItem = ({ item }) => (
    <CryptoHoldingListItem
      coinName={item.coin ? item.coin.name : "Unknown"}
      tickerSymbol={item.coinTickerSymbol}
      currentPrice={item.coin ? item.coin.price_usd : "n/a"}
      amountOwned={item.amountOwned}
      value={item.valueOfAmountOwned.value}
      onTouch={() => props.handleHoldingListItemTouch(item)}
    />
  );

  keyExtractor = (item, index) => item.id;

  return (
    <FlatList
      data={props.holdings}
      extraData={this.state}
      renderItem={this.renderItem}
      keyExtractor={this.keyExtractor}
    />
  );
}

export default CryptoHoldingList;

const styles = StyleSheet.create({
  cryptoHoldingList: { flex: 1 }
});
