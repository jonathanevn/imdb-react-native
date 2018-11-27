import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Baseline extends React.Component {
  render() {
    return (
      <Text style={styles.information}>
        {this.props.year} <Text>{"  "}</Text> {this.props.prod}{" "}
        <Text>{"  "}</Text> {this.props.time} <Text>{"  "}</Text>
        {this.props.genre}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  information: {
    fontSize: 13,
    textAlign: "left",
    color: "rgb(177,177,177)",
    marginBottom: 25,
    marginTop: 7
  }
});

export default Baseline;
