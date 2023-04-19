import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PointsWrapper from "../components/PointsWrapper";
import EcoCartContainer from "../components/EcoCartContainer";
import StoreFinderContainer from "../components/StoreFinderContainer";
import FrameComponent from "../components/FrameComponent";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";
import MapView from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

const FindAStore02 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <CartScreen></CartScreen>
    </View>
  );
};
