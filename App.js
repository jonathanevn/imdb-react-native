/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Image
            style={{ width: 60, height: 60 }}
            source={require("./images/imdbLogoBlanc.png")}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Interstellar</Text>
          <Text style={styles.information}>
            2014 <Text>{"  "}</Text> PG-13 <Text>{"  "}</Text> 2h49min{" "}
            <Text>{"  "}</Text>Adventure, Drama, Sci-Fi
          </Text>
          <View style={styles.picturesAndSynopsis}>
            <Image
              style={{ width: 90, height: 140 }}
              source={{
                uri:
                  "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
              }}
            />
            <View style={styles.synopsisAndButton}>
              <Text style={styles.synopsis}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity style={styles.button} onPress={this.onPress}>
                <Text style={styles.textButton}> + ADD TO WATCHLIST </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.rateInformation}>
            <View style={styles.rate}>
              <Image source={require("./images/star.png")} />
              <Text style={styles.rateWhite}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>8.6</Text>
                /10
              </Text>
              <Text style={styles.rateGrey}>1.1M</Text>
            </View>
            <View style={styles.rate}>
              <Image source={require("./images/starWhite.png")} />
              <Text style={styles.rateWhite}>RATE THIS</Text>
            </View>
            <View style={styles.rate}>
              <Text style={styles.metascore}>74</Text>
              <Text style={styles.rateWhite}>Metascore</Text>
              <Text style={styles.rateGrey}>46 critic reviews</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.titleSeeAll}>
            <Text style={styles.sectionTitle}>Top Billed Cast</Text>
            <Text style={{ color: "#02AAF4", fontWeight: "600", fontSize: 12 }}>
              SEE ALL
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.actor}>
              <Image
                style={{ width: 120, height: 180 }}
                source={require("./images/MATTHEW_MCCONAUGHEY.jpg")}
              />
              <View style={{ padding: 10 }}>
                <Text style={styles.nameActor}>Matthew McC...</Text>
                <Text style={styles.roleActor}>Cooper</Text>
              </View>
            </View>
            <View style={styles.actor}>
              <Image
                style={{ width: 120, height: 180 }}
                source={require("./images/ANNE_HATHAWAY.jpg")}
              />
              <View style={{ padding: 10 }}>
                <Text style={styles.nameActor}>Anne Hathaway</Text>
                <Text style={styles.roleActor}>Brand</Text>
              </View>
            </View>
            <View style={styles.actor}>
              <Image
                style={{ width: 120, height: 180 }}
                source={require("./images/JOHN_LITHGOW.jpg")}
              />
              <View style={{ padding: 10 }}>
                <Text style={styles.nameActor}>John Lithgow</Text>
                <Text style={styles.roleActor}>Donald</Text>
              </View>
            </View>
            <View style={styles.actor}>
              <Image
                style={{ width: 120, height: 180 }}
                source={require("./images/MICHAEL_CAINE.jpg")}
              />
              <View style={{ padding: 10 }}>
                <Text style={styles.nameActor}>Michael Caine</Text>
                <Text style={styles.roleActor}>Professeur Brand</Text>
              </View>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#191919"
  },

  //--- HEADER ---//
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
  },

  //--- SECTION Title Pictures Synopsis Rate ---//
  section: {
    backgroundColor: "rgb(33,33,33)",
    padding: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    marginBottom: 20
  },

  title: {
    fontSize: 30,
    textAlign: "left",
    color: "white"
  },

  information: {
    fontSize: 13,
    textAlign: "left",
    color: "rgb(177,177,177)",
    marginBottom: 25,
    marginTop: 7
  },

  picturesAndSynopsis: {
    flexDirection: "row"
  },

  synopsisAndButton: {
    flex: 1,
    fontSize: 13,
    paddingLeft: 15,
    color: "white"
  },

  synopsis: {
    textAlign: "left",
    color: "white",
    marginBottom: 15
  },

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
  },

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
  },

  //--- SECTION Top Billed Cast ---//

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
  },

  nameActor: {
    color: "white",
    fontSize: 13
  },

  roleActor: {
    color: "rgb(177,177,177)",
    fontSize: 12
  }
});
