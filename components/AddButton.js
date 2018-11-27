import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class AddButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text style={styles.textButton}> + ADD TO WATCHLIST </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0277BD",
    borderRadius: 3
  },

  textButton: {
    fontWeight: "bold",
    padding: 10,
    color: "white",
    textAlign: "center",
    fontSize: 12
  }
});

export default AddButton;
