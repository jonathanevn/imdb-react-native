import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Title extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "left",
    color: "white"
  }
});

export default Title;
