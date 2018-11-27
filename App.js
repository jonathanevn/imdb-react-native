/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Header from "./components/Header";
import MoviePreview from "./components/MoviePreview";
import Actor from "./components/Actor";
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
        <Header />
        <MoviePreview />
        <Actor />
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
  }
});
