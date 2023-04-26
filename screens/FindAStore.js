import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FoodStoreSelectionContainer from "../components/FoodStoreSelectionContainer";
import EcoCartContainer from "../components/EcoCartContainer";
import StoreFinderContainer from "../components/StoreFinderContainer";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const FindAStore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.findAStore}>
      <FoodStoreSelectionContainer />
      <View style={styles.navBar}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/location-on.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/shopping-cart.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/barcode-scanner.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/article.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/auto-awesome.png")}
        />
      </View>
      <EcoCartContainer
        productIds={require("../assets/ecocart-icon.png")}
        productDimensions={require("../assets/account-circle.png")}
        propRight={0}
        propRight1={0}
        propRight2={23}
        onAccountCirclePress={() => navigation.navigate("Profile")}
      />
      <StoreFinderContainer />
      <Text style={styles.findAStore1}>Find a Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  navBar: {
    top: 780,
    right: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    height: 64,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Color.white,
  },
  findAStore1: {
    top: 51,
    left: 30,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  findAStore: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default FindAStore;
