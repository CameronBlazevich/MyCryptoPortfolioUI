import React from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import AddHoldingForm from "./addHoldingForm";

function AddHoldingModal(props) {
  //console.log(props);
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
          <Text style={styles.headingText}>Add a Holding</Text>
        </View>
        <View style={[styles.row, styles.bodyRow]}>
          <AddHoldingForm
            handleAddHoldingFormSubmit={props.handleAddHoldingFormSubmit}
          />
        </View>
      </View>
    </Modal>
  );
}

export default AddHoldingModal;

const styles = StyleSheet.create({
  modalContent: {
    margin: 10,
    backgroundColor: "white",
    padding: 22,
    //justifyContent: "center",
    //alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  row: {
    // borderWidth: 1,
    //borderColor: "black",
    flexDirection: "row"
  },
  headerRow: {
    //flex: 1,
    //backgroundColor: "lightsteelblue",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  // bodyRow: { flex: 5, justifyContent: "center", alignItems: "center" },
  // footerRow: { flex: 1 },
  // cell: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: 10,
  //   flexDirection: "row"
  // },
  // cellSmall: { flex: 1 },
  // cellLarge: { flex: 3 },
  headingText: { fontWeight: "bold", fontSize: 20 }
});
