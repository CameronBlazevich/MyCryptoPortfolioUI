import React from "react";
import { View, StyleSheet, Button } from "react-native";
import tcombForm from "tcomb-form-native";

function AddHoldingForm(props) {
  const Form = tcombForm.form.Form;

  const AddHolding = tcombForm.struct({
    "Ticker symbol": tcombForm.String,
    "Amount owned": tcombForm.Number
  });

  return (
    <View style={styles.container}>
      <Form type={AddHolding} ref={c => (this._form = c)} />
      <Button
        title="Add Coin"
        onPress={() => props.handleAddHoldingFormSubmit(this._form.getValue())}
      />
    </View>
  );
}

export default AddHoldingForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});
