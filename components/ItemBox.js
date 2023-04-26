import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import GroceryContainer from "./GroceryContainer";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ItemBox = () => {
  return (
    <Pressable style={[styles.item, styles.itemLayout]}>
      <View style={[styles.itemInner, styles.itemLayout]}>
        <View style={[styles.instanceChild, styles.pointGainLayout]} />
      </View>
      <GroceryContainer
        screenshot20230406At6261={require("../assets/screenshot-20230406-at-626-14.png")}
        freshRedBellPepper="Fresh Red Bell Pepper"
        ea="ea."
        prop="$1.54"
      />
      <View style={[styles.pointGain, styles.pointGainLayout]}>
        <Text style={styles.xPt}>+X PT</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 78,
    width: 320,
    position: "absolute",
  },
  pointGainLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#ececec",
    borderWidth: 1,
  },
  itemInner: {
    top: 0,
    left: 0,
  },
  xPt: {
    fontSize: FontSize.size_5xs,
    fontWeight: "800",
    fontFamily: FontFamily.lexendExtrabold,
    color: Color.teal,
    textAlign: "left",
  },
  pointGain: {
    top: 54,
    left: 277,
    backgroundColor: Color.azure,
    flexDirection: "row",
    padding: Padding.p_11xs,
  },
  item: {
    top: 670,
    left: 40,
  },
});

export default ItemBox;
