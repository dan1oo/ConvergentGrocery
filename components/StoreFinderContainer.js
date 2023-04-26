import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const StoreFinderContainer = ({
  propLeft,
  propWidth,
  searchBarCollapsable,
}) => {
  const searchBarStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propLeft, propWidth]);

  return (
    <View
      style={[styles.searchBar, searchBarStyle]}
      collapsable={searchBarCollapsable}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <Image
            style={styles.searchIcon}
            resizeMode="cover"
            source={require("../assets/search.png")}
          />
          <Text style={styles.searchForStore}>Search for store</Text>
        </View>
        <Image
          style={styles.myLocationIcon}
          resizeMode="cover"
          source={require("../assets/my-location.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchForStore: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.darkgray_100,
    textAlign: "left",
    marginLeft: 10,
  },
  frameParent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  myLocationIcon: {
    width: 20,
    height: 20,
    marginLeft: 160,
  },
  searchBar: {
    position: "absolute",
    top: 146,
    left: 30,
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#d0d0d0",
    borderWidth: 1,
    width: 330,
    paddingLeft: Padding.p_mini,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_166xl,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
  },
});

export default StoreFinderContainer;
