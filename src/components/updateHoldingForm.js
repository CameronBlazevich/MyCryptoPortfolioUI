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
        <View style={styles.buttonContainer}>
          <Button
            title="Update"
            onPress={() =>
              props.updateHolding(props.holdingSelected, this._form.getValue())
            }
          />
        </View>
        <View style={styles.buttonContainer}>
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
    padding: 20
  },
  row: { flexDirection: "row" },
  buttonContainer: { flex: 1, padding: 5 }
});
