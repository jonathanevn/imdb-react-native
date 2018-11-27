import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Synopsis extends React.Component {
  render() {
    return <Text style={styles.synopsis}>{this.props.description}</Text>;
  }
}

const styles = StyleSheet.create({
  synopsis: {
    textAlign: "left",
    color: "white",
    marginBottom: 15
  }
});

export default Synopsis;
