import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require("../images/imdbLogoBlanc.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(57,57,57)",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    marginTop: 50,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9
  }
});

export default Header;
