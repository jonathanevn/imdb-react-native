import React, { Fragment } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class CardActor extends React.Component {
  render() {
    return (
      <View>
        <Image style={{ width: 120, height: 180 }} source={this.props.photo} />
        <Text style={styles.nameActor}>{this.props.name}</Text>
        <Text style={styles.roleActor}>{this.props.role}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameActor: {
    color: "white",
    fontSize: 13,
    paddingTop: 10,
    paddingLeft: 10
  },

  roleActor: {
    color: "rgb(177,177,177)",
    fontSize: 12,
    paddingLeft: 10,
    paddingBottom: 10
  }
});

export default CardActor;
