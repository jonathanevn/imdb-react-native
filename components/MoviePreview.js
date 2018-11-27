import React from "react";
import Title from "./Title";
import Baseline from "./Baseline";
import Synopsis from "./Synopsis";
import AddButton from "./AddButton";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from "react-native";

class MoviePreview extends React.Component {
  render() {
    return (
      <View style={styles.section}>
        <Title title="Interstellar" />
        <Baseline
          year="2014"
          prod="PG-13"
          time="2h49min"
          genre="Adventure, Drama, Sci-Fi"
        />
        <View style={styles.picturesAndSynopsis}>
          <Image
            style={{ width: 90, height: 140 }}
            source={{
              uri:
                "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
            }}
          />
          <View style={styles.synopsisAndButton}>
            <Synopsis
              description="A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival."
            />
            <AddButton />
          </View>
        </View>

        <View style={styles.rateInformation}>
          <View style={styles.rate}>
            <Image source={require("../images/star.png")} />
            <Text style={styles.rateWhite}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>8.6</Text>
              /10
            </Text>
            <Text style={styles.rateGrey}>1.1M</Text>
          </View>
          <View style={styles.rate}>
            <Image source={require("../images/starWhite.png")} />
            <Text style={styles.rateWhite}>RATE THIS</Text>
          </View>
          <View style={styles.rate}>
            <Text style={styles.metascore}>74</Text>
            <Text style={styles.rateWhite}>Metascore</Text>
            <Text style={styles.rateGrey}>46 critic reviews</Text>
          </View>
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
  },

  section: {
    backgroundColor: "rgb(33,33,33)",
    padding: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    marginBottom: 20
  },

  picturesAndSynopsis: {
    flexDirection: "row"
  },

  synopsisAndButton: {
    flex: 1,
    fontSize: 13,
    paddingLeft: 15,
    color: "white"
  }
});

export default MoviePreview;
