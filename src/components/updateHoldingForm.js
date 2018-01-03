import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import tcombForm from "tcomb-form-native";

function UpdateHoldingForm(props) {
  const Form = tcombForm.form.Form;

  const UpdateHolding = tcombForm.struct({
    "New Amount": tcombForm.Number
  });

  return (
    <View style={styles.container}>
      <Form type={UpdateHolding} ref={c => (this._form = c)} />
      <View style={[styles.row, styles.footerRow]}>
        <View style={[styles.cell, styles.cellSmall]}>
          <Text>View</Text>
        </View>
        <View style={[styles.cell, styles.cellSmall]}>
          <Button
            title="Update"
            onPress={() =>
              props.updateHolding(props.holdingSelected, this._form.getValue())
            }
          />
        </View>
        <View style={[styles.cell, styles.cellSmall]}>
          <Button
            title="Delete"
            onPress={() =>
              props.removeHolding(props.holdingSelected.coinTickerSymbol)
            }
          />
        </View>
      </View>
    </View>
  );
}

export default UpdateHoldingForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //marginTop: 50,
    padding: 20
    //backgroundColor: "#ffffff"
  },
  row: {
    flexDirection: "row"
  },
  headerRow: { flex: 1, backgroundColor: "lightsteelblue" },
  bodyRow: { flex: 2 },
  footerRow: { flex: 1 },
  cell: { alignItems: "center", padding: 5, flexDirection: "row" },
  cellSmall: { flex: 1 },
  cellLarge: { flex: 3 },
  headingText: { fontWeight: "bold", fontSize: 20 }
});
