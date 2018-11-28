import React from "react";
import CardActor from "./CardActor";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

class Actor extends React.Component {
  render() {
    return (
      <View style={styles.sectionActor}>
        <View style={styles.titleSeeAll}>
          <Text style={styles.sectionTitle}>Top Billed Cast</Text>
          <Text style={{ color: "#02AAF4", fontWeight: "600", fontSize: 12 }}>
            SEE ALL
          </Text>
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.actor}>
            <CardActor
              photo={require("../images/MATTHEW_MCCONAUGHEY.jpg")}
              name="Matthew McC..."
              role="Cooper"
            />
          </View>
          <View style={styles.actor}>
            <CardActor
              photo={require("../images/ANNE_HATHAWAY.jpg")}
              name="Anne Hathaway"
              role="Brand"
            />
          </View>
          <View style={styles.actor}>
            <CardActor
              photo={require("../images/JOHN_LITHGOW.jpg")}
              name="John Lithgow"
              role="Donald"
            />
          </View>
          <View style={styles.actor}>
            <CardActor
              photo={require("../images/MICHAEL_CAINE.jpg")}
              name="Michael Caine"
              role="Professeur Brand"
            />
          </View>
        </ScrollView>

        <View>
          <Text style={{ color: "white", lineHeight: 25, marginTop: 10 }}>
            Director
          </Text>
          <Text style={{ color: "rgb(177,177,177)", fontSize: 12 }}>
            Christopher Nolan
          </Text>
          <Text style={{ color: "white", lineHeight: 25, marginTop: 10 }}>
            Writers
          </Text>
          <Text style={{ color: "rgb(177,177,177)", fontSize: 12 }}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionActor: {
    backgroundColor: "rgb(33,33,33)",
    padding: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    marginBottom: 20
  },

  titleSeeAll: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 15
  },

  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "400"
  },

  actor: {
    backgroundColor: "rgb(42,42,42)",
    marginRight: 7
  }
});

export default Actor;
