import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CryptoHoldingListItem from "./cryptoHoldingListItem";

function CryptoHoldingList(props) {
  //console.log(props);
  const testData = [
    {
      key: 1,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 2,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 3,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 4,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 5,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 6,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 7,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 8,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 9,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 10,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 11,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 12,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 13,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 14,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 15,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 16,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 17,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 18,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 19,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 20,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 21,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 22,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 23,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 24,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 25,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    },
    {
      key: 26,
      coinName: "ethereum",
      currentPrice: "10325",
      amountOwned: "0.56"
    },
    {
      key: 27,
      coinName: "bitcoin",
      currentPrice: "100000",
      amountOwned: "7.32"
    }
  ];

  renderItem = ({ item }) => (
    <CryptoHoldingListItem
      coinName={item.coin.name}
      tickerSymbol={item.coinTickerSymbol}
      currentPrice={item.coin.price_usd}
      amountOwned={item.amountOwned}
      value={item.valueOfAmountOwned.value}
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
