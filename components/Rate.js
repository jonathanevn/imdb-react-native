import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Rate extends React.Component {
  render() {
    return (
      <View style={styles.rateInformation}>
        <View style={styles.rate}>
          <Image source={require("../images/star.png")} />
          <Text style={styles.rateWhite}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {this.props.note}
            </Text>
            {this.props.noteTotal}
          </Text>
          <Text style={styles.rateGrey}>{this.props.numberRate}</Text>
        </View>
        <View style={styles.rate}>
          <Image source={require("../images/starWhite.png")} />
          <Text style={styles.rateWhite}>{this.props.rateThis}</Text>
        </View>
        <View style={styles.rate}>
          <Text style={styles.metascore}>{this.props.metascore}</Text>
          <Text style={styles.rateWhite}>{this.props.metascoreLabel}</Text>
          <Text style={styles.rateGrey}>{this.props.critic}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rateInformation: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    marginTop: 20
  },

  rate: {
    alignContent: "center",
    alignItems: "center"
  },

  rateWhite: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 13,
    marginTop: 7
  },

  rateGrey: {
    color: "grey",
    textAlign: "center",
    fontSize: 11
  },

  metascore: {
    backgroundColor: "#61C74F",
    width: 23,
    padding: 3,
    color: "white",
    fontWeight: "600"
  }
});

export default Rate;
