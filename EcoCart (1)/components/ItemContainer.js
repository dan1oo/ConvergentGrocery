import * as React from "react";
import { StyleSheet, View } from "react-native";
import GroceryContainer from "./GroceryContainer";
import { Border, Color } from "../GlobalStyles";

const ItemContainer = () => {
  return (
    <View style={[styles.item, styles.itemLayout]}>
      <View style={[styles.itemInner, styles.itemLayout]}>
        <View style={styles.componentChild} />
      </View>
      <GroceryContainer
        screenshot20230406At6261={require("../assets/screenshot-20230406-at-626-12.png")}
        freshRedBellPepper="Non-fat Plain Greek Yogurt"
        ea="32 oz"
        prop="$5.08"
        propWidth={251}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 78,
    width: 332,
    position: "absolute",
  },
  componentChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#ececec",
    borderWidth: 1,
    position: "absolute",
  },
  itemInner: {
    top: 0,
    left: 0,
  },
  item: {
    top: 142,
    left: 28,
  },
});

export default ItemContainer;
