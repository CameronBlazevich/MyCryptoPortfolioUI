import React from "react";
import { Modal, View, Text } from "react-native";

function AddHoldingModal(props) {
  return (
    <Modal visible={props.visible} transparent={true}>
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
        <Text>Modal Here</Text>
      </View>
      <View style={{ flex: 1 }} />
    </Modal>
  );
}

export default AddHoldingModal;
