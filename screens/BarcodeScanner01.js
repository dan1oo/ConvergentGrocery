import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const BarcodeScanner01 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.barcodeScanner01, styles.barcodeScanner01Layout]}
      onPress={() => navigation.navigate("BarcodeScanner02")}
    >
      <View style={[styles.backgroundPicture, styles.cornersPosition]}>
        <Image
          style={[styles.backgroundPictureIcon, styles.barcodeScanner01Layout]}
          resizeMode="cover"
          source={require("../assets/backgroundpicture.png")}
        />
      </View>
      <Image
        style={styles.backgroundPictureIcon1}
        resizeMode="cover"
        source={require("../assets/backgroundpicture1.png")}
      />
      <EcoCartContainer
        productIds={require("../assets/ecocart-icon4.png")}
        productDimensions={require("../assets/account-circle.png")}
        propRight="unset"
        propWidth={390}
        propRight1="unset"
        propWidth1={390}
        propDisplay="none"
        propDisplay1="none"
        propRight2="unset"
        propWidth2={344}
        onAccountCirclePress={() => navigation.navigate("Profile")}
      />
      <View style={[styles.instructions, styles.flashFlexBox]}>
        <Text style={styles.centerBarcodeAnd}>
          Center barcode and hold until scanning is complete
        </Text>
      </View>
      <View style={[styles.flash, styles.flashFlexBox]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/flash-off.png")}
        />
      </View>
      <Pressable
        style={styles.backgroundPictureIcon1}
        onPress={() => navigation.navigate("BarcodeScanner02")}
      >
        <View style={[styles.cameraSectionParent, styles.cameraLayout]}>
          <View style={[styles.cameraSection, styles.navBarBorder]} />
          <Image
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image-11.png")}
          />
        </View>
        <View style={[styles.corners, styles.cornersPosition]} />
      </Pressable>
      <Image
        style={styles.cornersIcon}
        resizeMode="cover"
        source={require("../assets/corners.png")}
      />
      <LinearGradient
        style={[styles.navBar, styles.navBarFlexBox]}
        locations={[0, 1, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)", "#000"]}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/location-on3.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/shopping-cart2.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/barcode-scanner1.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/article3.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/auto-awesome5.png")}
        />
      </LinearGradient>
      <View style={[styles.location, styles.navBarFlexBox]}>
        <Image
          style={styles.locationOnIcon1}
          resizeMode="cover"
          source={require("../assets/location-on4.png")}
        />
        <Text style={styles.hebHancockCenter}>HEB, Hancock Center</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  barcodeScanner01Layout: {
    overflow: "hidden",
    width: "100%",
  },
  cornersPosition: {
    top: 0,
    position: "absolute",
  },
  flashFlexBox: {
    flexDirection: "row",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  cameraLayout: {
    width: 249,
    height: 120,
    top: 0,
    position: "absolute",
  },
  navBarBorder: {
    borderStyle: "solid",
    left: 0,
  },
  navBarFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  backgroundPictureIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  backgroundPicture: {
    width: 390,
    left: 0,
    height: 846,
  },
  backgroundPictureIcon1: {
    top: 373,
    left: 71,
    width: 250,
    height: 120,
    position: "absolute",
  },
  centerBarcodeAnd: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.lexendRegular,
    textAlign: "center",
    width: 212,
    color: Color.white,
  },
  instructions: {
    top: 257,
    left: 78,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_800,
    padding: Padding.p_3xs,
  },
  flash: {
    top: 63,
    left: 316,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gray_900,
    padding: Padding.p_3xs,
  },
  cameraSection: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 249,
    height: 120,
    top: 0,
    position: "absolute",
    backgroundColor: Color.gray_900,
  },
  image1Icon: {
    top: 379,
    left: 108,
    width: 183,
    height: 106,
    display: "none",
    position: "absolute",
  },
  cameraSectionParent: {
    left: 0,
  },
  corners: {
    left: 231,
    width: 19,
    height: 16,
  },
  cornersIcon: {
    top: 358,
    left: 56,
    width: 280,
    height: 151,
    position: "absolute",
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  navBar: {
    top: 782,
    borderColor: "#605f5f",
    borderTopWidth: 0.5,
    height: 64,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    backgroundColor: "transparent",
    borderStyle: "solid",
    left: 0,
    width: 390,
  },
  locationOnIcon1: {
    width: 15,
    height: 15,
  },
  hebHancockCenter: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    marginLeft: 5,
    color: Color.white,
  },
  location: {
    top: 67,
    left: 32,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.darkgray_200,
    alignItems: "center",
    padding: Padding.p_3xs,
  },
  barcodeScanner01: {
    backgroundColor: Color.white,
    flex: 1,
    height: 846,
  },
});

export default BarcodeScanner01;
