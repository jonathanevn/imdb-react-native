import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

class CardActor extends React.Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Text style={styles.nameActor}>{this.props.name}</Text>
        <Text style={styles.roleActor}>{this.props.role}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameActor: {
    color: "white",
    fontSize: 13
  },

  roleActor: {
    color: "rgb(177,177,177)",
    fontSize: 12
  }
});

export default CardActor;
