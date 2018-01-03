import React from "react";
import { Modal, View, Text } from "react-native";
import AddHoldingForm from "./addHoldingForm";

function AddHoldingModal(props) {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.handleModalCloseRequest}
    >
      <View style={{ flex: 1 }} />
      <View
        style={{
          flex: 2,
          opacity: 0.8,
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <AddHoldingForm
          handleAddHoldingFormSubmit={props.handleAddHoldingFormSubmit}
        />
      </View>
      <View style={{ flex: 1 }} />
    </Modal>
  );
}

export default AddHoldingModal;
