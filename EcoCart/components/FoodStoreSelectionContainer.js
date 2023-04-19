import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FiestaMartContainer from "./FiestaMartContainer";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FoodStoreSelectionContainer = () => {
  return (
    <View style={styles.storeSelection}>
      <View style={styles.storeLogoParent}>
        <Image
          style={styles.storeLogoIcon}
          resizeMode="cover"
          source={require("../assets/storelogo.png")}
        />
        <Text style={styles.heb}>HEB</Text>
      </View>
      <FiestaMartContainer
        storeLogo={require("../assets/storelogo1.png")}
        hEB="Fiesta Mart"
      />
      <FiestaMartContainer
        storeLogo={require("../assets/storelogo2.png")}
        hEB="Fresh Plus"
        propWidth={329}
        propPaddingLeft={87}
        propWidth1={206}
      />
      <FiestaMartContainer
        storeLogo={require("../assets/defaultstorelogo.png")}
        hEB="Fresh Evening Food Store"
        propWidth={329}
        propPaddingLeft={87}
        propWidth1={206}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  storeLogoIcon: {
    width: 32,
    height: 32,
  },
  heb: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    textAlign: "left",
    display: "flex",
    width: 147,
    marginLeft: 10,
    alignItems: "center",
  },
  storeLogoParent: {
    borderRadius: Border.br_3xs,
    width: 330,
    height: 47,
    flexDirection: "row",
    paddingLeft: Padding.p_9xl,
    paddingTop: Padding.p_mini,
    paddingRight: Padding.p_97xl,
    paddingBottom: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
  },
  storeSelection: {
    position: "absolute",
    top: 208,
    left: 18,
    width: 342,
  },
});

export default FoodStoreSelectionContainer;
