import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PointsWrapper from "../components/PointsWrapper";
import EcoCartContainer from "../components/EcoCartContainer";
import StoreFinderContainer from "../components/StoreFinderContainer";
import FrameComponent from "../components/FrameComponent";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const FindAStore02 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.findAStore02}>
      <Image
        style={[styles.mapFrameIcon, styles.popUpPosition]}
        resizeMode="cover"
        source={require("../assets/map-frame.png")}
      />
      <View style={[styles.popUp, styles.popUpPosition]} />
      <Pressable
        style={styles.findAStore02Child}
        onPress={() => navigation.navigate("StoreRewards")}
      />
      <PointsWrapper />
      <View style={[styles.navBar, styles.navBarFlexBox]}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("FindAStore02")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/location-on.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          onPress={() => navigation.navigate("CartList")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/shopping-cart.png")}
          />
        </Pressable>
        <Pressable 
          style={[styles.shoppingCartIcon, styles.iconLayout]} onPress={() => navigation.navigate("BarcodeScanner")}>
          <Image
            resizeMode="cover"
            source={require("../assets/barcode-scanner.png")}
         />
        </Pressable>
        <Pressable
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          onPress={() => navigation.navigate("TripReport")}
        >
          <Image resizeMode="cover" source={require("../assets/article.png")} />
        </Pressable>
        <Pressable
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          onPress={() => navigation.navigate("Rewards")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/auto-awesome.png")}
          />
        </Pressable>
      </View>
      <EcoCartContainer
        productIds={require("../assets/ecocart-icon4.png")}
        productDimensions={require("../assets/account-circle.png")}
        onAccountCirclePress={() => navigation.navigate("Profile")}
      />
      <View style={[styles.locationIcon, styles.navBarFlexBox]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/near-me.png")}
        />
      </View>
      <StoreFinderContainer propLeft={27} propWidth={333} />
      <Text style={styles.findAStore}>Find a Store</Text>
      <FrameComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  popUpPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
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
    height: 844,
  },
  popUp: {
    top: 557,
    borderTopLeftRadius: Border.br_16xl,
    borderTopRightRadius: Border.br_16xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 223,
    backgroundColor: Color.white,
  },
  findAStore02Child: {
    top: 568,
    left: 171,
    borderRadius: Border.br_xl,
    backgroundColor: Color.gainsboro_100,
    width: 50,
    height: 5,
    position: "absolute",
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  icon: {
    height: "100%",
    width: "100%",
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
    flexDirection: "row",
  },
  locationIcon: {
    top: 492,
    left: 335,
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
  },
  findAStore: {
    top: 51,
    left: 30,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  findAStore02: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default FindAStore02;
