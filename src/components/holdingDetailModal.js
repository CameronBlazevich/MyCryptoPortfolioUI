import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import UpdateHoldingForm from "./updateHoldingForm";
import CoinIcon from "../icons/svg/bitcoinSvg";

function HoldingDetailModal(props) {
  return (
    <Modal
      isVisible={props.visible}
      onRequestClose={props.handleModalCloseRequest}
      onBackdropPress={() => props.handleModalCloseRequest}
    >
      <View style={styles.modalContent}>
        <View style={[styles.row, styles.headerRow]}>
          <View style={[styles.cell, styles.cellSmall]}>
            <CoinIcon
              tickerSymbol={props.holdingSelected.coinTickerSymbol}
              height={35}
              width={35}
            />
          </View>
          <View style={[styles.cell, styles.cellLarge]}>
            <Text style={styles.headingText}>
              {props.holdingSelected.coin
                ? props.holdingSelected.coin.name
                : "Unknown"}
            </Text>
            <Text style={styles.headingText}>
              {" "}
              ({props.holdingSelected.coinTickerSymbol})
            </Text>
          </View>
        </View>
        <View style={[styles.row, styles.bodyRow]}>
          <UpdateHoldingForm
            holdingSelected={props.holdingSelected}
            updateHolding={props.updateHolding}
            removeHolding={props.removeHolding}
          />
        </View>
      </View>
    </Modal>
  );
}

export default HoldingDetailModal;

const styles = StyleSheet.create({
  modalContent: {
    margin: 10,
    backgroundColor: "white",
    padding: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  row: {
    flexDirection: "row"
  },
  headerRow: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  cell: { alignItems: "center", padding: 10, flexDirection: "row" },
  cellSmall: { flex: 1 },
  cellLarge: { flex: 4 },
  headingText: { fontWeight: "bold", fontSize: 20 }
});
