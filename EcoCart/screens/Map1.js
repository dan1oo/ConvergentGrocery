import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Map1 = () => {
  return (
    <View style={styles.map}>
      <Image
        style={[styles.map1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/map1.png")}
      />
      <Image
        style={[styles.map2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/map2.png")}
      />
      <Image
        style={[styles.map3Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/map3.png")}
      />
      <Image
        style={[styles.map4Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/map4.png")}
      />
      <Image
        style={[styles.map6Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/map6.png")}
      />
      <Image
        style={[styles.map5Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/map5.png")}
      />
      <Image
        style={[styles.map7Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/map7.png")}
      />
      <Image
        style={[styles.map8Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/map8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 1125,
    position: "absolute",
  },
  map1Icon: {
    top: 899,
    left: 709,
    height: 1167,
  },
  map2Icon: {
    top: 0,
    left: 658,
    height: 1188,
  },
  map3Icon: {
    top: -25,
    left: 0,
    height: 1198,
  },
  map4Icon: {
    top: 1170,
    left: -34,
    height: 1161,
  },
  map6Icon: {
    top: 502,
    left: 1487,
    height: 1197,
  },
  map5Icon: {
    top: 1699,
    left: 1344,
    height: 564,
  },
  map7Icon: {
    top: -663,
    left: 1654,
    height: 1181,
  },
  map8Icon: {
    top: 1477,
    left: 1876,
    height: 968,
  },
  map: {
    flex: 1,
    width: "100%",
    height: 2022,
    overflow: "hidden",
    display: "none",
  },
});

export default Map1;
