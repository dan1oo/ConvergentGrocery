import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import StoreFinderContainer from "../components/StoreFinderContainer";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const FindAStore1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.findAStore}>
      <Image
        style={styles.mapFrameIcon}
        resizeMode="cover"
        source={require("../assets/map-frame1.png")}
      />
      <View style={[styles.navBar, styles.navBarFlexBox]}>
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
        productIds={require("../assets/ecocart-icon6.png")}
        productDimensions={require("../assets/account-circle.png")}
        onAccountCirclePress={() => navigation.navigate("Profile")}
      />
      <Pressable style={[styles.locationIcon, styles.navBarFlexBox]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/near-me.png")}
        />
      </Pressable>
      <StoreFinderContainer
        propLeft={27}
        propWidth={333}
        searchBarCollapsable
      />
      <Text style={styles.findAStore1}>Find a Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarFlexBox: {
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  mapFrameIcon: {
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
    height: 844,
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  navBar: {
    top: 780,
    right: 0,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    height: 64,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    left: 0,
  },
  locationIcon: {
    top: 722,
    left: 335,
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
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
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.white,
  },
});

export default FindAStore1;
