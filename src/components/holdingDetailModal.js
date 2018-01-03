import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import UpdateHoldingForm from "./updateHoldingForm";

function HoldingDetailModal(props) {
  //console.log(JSON.stringify(props.holdingSelected));
  handleFormSubmit = formData => {
    console.log(formData);
  };
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.handleModalCloseRequest}
    >
      <View style={{ flex: 1, backgroundColor: "white", opacity: 0.8 }} />
      <View
        style={{
          flex: 2,
          opacity: 0.95,
          backgroundColor: "white",
          //justifyContent: "center",
          //alignItems: "center",
          padding: 30
        }}
      >
        <View style={[styles.row, styles.headerRow]}>
          <View style={[styles.cell, styles.cellSmall]}>
            <Text>LOGO</Text>
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
            onSubmit={this.handleFormSubmit}
          />
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "white", opacity: 0.8 }} />
    </Modal>
  );
}

//JUST MOVED ALL OF THE BUTTONS TO THE FORM AND NEED TO CONFIRM WIRED UP CORRECTLY

export default HoldingDetailModal;

const styles = StyleSheet.create({
  row: {
    //flex: 1,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row"
    //justifyContent: "center"
  },
  headerRow: { flex: 1, backgroundColor: "lightsteelblue" },
  bodyRow: { flex: 2 },
  footerRow: { flex: 1 },
  cell: { alignItems: "center", padding: 10, flexDirection: "row" },
  cellSmall: { flex: 1 },
  cellLarge: { flex: 3 },
  headingText: { fontWeight: "bold", fontSize: 20 }
});
