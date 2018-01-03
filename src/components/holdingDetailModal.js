import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import UpdateHoldingForm from "./updateHoldingForm";

function HoldingDetailModal(props) {
  return (
    <Modal
      isVisible={props.visible}
      //transparent={true}
      onRequestClose={props.handleModalCloseRequest}
      //backdropColor={"red"}
      // backdropOpacity={0.5}
      onBackdropPress={() => props.handleModalCloseRequest}
    >
      <View style={styles.modalContent}>
        <View style={[styles.row, styles.headerRow]}>
          <View style={[styles.cell, styles.cellSmall]}>
            <Image
              style={{ height: 55, width: 55 }}
              source={require("../icons/bitcoin_black.png")}
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
    //backgroundColor: "lightsteelblue"
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  //   bodyRow: { flex: 3 },
  cell: { alignItems: "center", padding: 10, flexDirection: "row" },
  cellSmall: { flex: 1 },
  cellLarge: { flex: 4 },
  headingText: { fontWeight: "bold", fontSize: 20 }
});
