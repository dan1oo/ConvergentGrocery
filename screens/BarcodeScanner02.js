import * as React from "react";
import { Pressable, Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import ScannedItemContainer from "../components/ScannedItemContainer";
import ItemBox from "../components/ItemBox";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const BarcodeScanner02 = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.barcodeScanner02}>
      <Image
        style={[styles.backgroundPictureIcon, styles.popUpPosition]}
        resizeMode="cover"
        source={require("../assets/backgroundpicture.png")}
      />
      <Image
        style={styles.backgroundPictureIcon1}
        resizeMode="cover"
        source={require("../assets/backgroundpicture1.png")}
      />
      <View style={[styles.popUp, styles.popUpPosition]} />
      <View style={styles.barcodeScanner02Child} />
      <View style={[styles.barcodeScanner02Item, styles.barcodePosition]} />
      <View style={[styles.barcodeScanner02Inner, styles.barcodePosition]} />
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
      <View style={styles.instructions}>
        <Text style={styles.centerBarcodeAnd}>
          Center barcode and hold until scanning is complete
        </Text>
      </View>
      <Pressable style={styles.flash}>
        <Image
          style={styles.flashOffIconLayout}
          resizeMode="cover"
          source={require("../assets/flash-off.png")}
        />
      </Pressable>
      <View style={styles.backgroundPictureIcon1}>
        <View style={styles.cameraSectionParent}>
          <View style={styles.cameraSection} />
          <Image
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image-1.png")}
          />
        </View>
        <View style={styles.corners} />
      </View>
      <Image
        style={styles.cornersIcon}
        resizeMode="cover"
        source={require("../assets/corners.png")}
      />
      <View style={styles.navBar}>
        <Image
          style={styles.flashOffIconLayout}
          resizeMode="cover"
          source={require("../assets/location-on3.png")}
        />
        <Pressable
          style={[styles.shoppingCart, styles.flashOffIconLayout]}
          onPress={() => navigation.navigate("CartList")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/shopping-cart2.png")}
          />
        </Pressable>
        <Image
          style={[styles.shoppingCart, styles.flashOffIconLayout]}
          resizeMode="cover"
          source={require("../assets/barcode-scanner1.png")}
        />
        <Image
          style={[styles.shoppingCart, styles.flashOffIconLayout]}
          resizeMode="cover"
          source={require("../assets/article3.png")}
        />
        <Image
          style={[styles.shoppingCart, styles.flashOffIconLayout]}
          resizeMode="cover"
          source={require("../assets/auto-awesome5.png")}
        />
      </View>
      <ScannedItemContainer />
      <ItemBox />
      <Pressable
        style={[styles.addItemsToCartWrapper, styles.locationFlexBox]}
        onPress={() => navigation.navigate("CartList")}
      >
        <Text style={styles.addItemsTo}>Add Item(s) to Cart</Text>
      </Pressable>
      <Text style={[styles.scannedItems, styles.scannedItemsTypo]}>
        5 Scanned Items
      </Text>
      <Pressable style={[styles.location, styles.locationFlexBox]}>
        <Image
          style={styles.locationOnIcon1}
          resizeMode="cover"
          source={require("../assets/location-on4.png")}
        />
        <Text style={[styles.hebHancockCenter, styles.scannedItemsTypo]}>
          HEB, Hancock Center
        </Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  popUpPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  barcodePosition: {
    transform: [
      {
        rotate: "89.3deg",
      },
    ],
    top: 582,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  flashOffIconLayout: {
    height: 24,
    width: 24,
  },
  locationFlexBox: {
    alignItems: "center",
    borderRadius: Border.br_6xl,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  scannedItemsTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  backgroundPictureIcon: {
    top: 0,
    height: 846,
  },
  backgroundPictureIcon1: {
    top: 373,
    left: 71,
    width: 250,
    height: 120,
    position: "absolute",
  },
  popUp: {
    top: 529,
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
    height: 254,
    backgroundColor: Color.white,
  },
  barcodeScanner02Child: {
    top: 542,
    left: 171,
    width: 50,
    height: 2,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  barcodeScanner02Item: {
    left: 27,
    width: 201,
    height: 5,
    backgroundColor: Color.gainsboro_100,
  },
  barcodeScanner02Inner: {
    left: 28,
    backgroundColor: "#8f8f8f",
    width: 90,
    height: 7,
  },
  centerBarcodeAnd: {
    textAlign: "center",
    width: 212,
    color: Color.white,
    fontFamily: FontFamily.lexendRegular,
    fontSize: FontSize.size_smi,
  },
  instructions: {
    top: 257,
    left: 78,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_800,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  flash: {
    top: 65,
    left: 316,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gray_900,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  cameraSection: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    width: 249,
    backgroundColor: Color.gray_900,
    height: 120,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image1Icon: {
    top: 6,
    left: 37,
    width: 183,
    height: 106,
    position: "absolute",
  },
  cameraSectionParent: {
    width: 249,
    height: 120,
    left: 0,
    top: 0,
    position: "absolute",
  },
  corners: {
    left: 231,
    width: 19,
    height: 16,
    top: 0,
    position: "absolute",
  },
  cornersIcon: {
    top: 358,
    left: 56,
    width: 280,
    height: 151,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  shoppingCart: {
    marginLeft: 44,
  },
  navBar: {
    top: 782,
    backgroundColor: Color.black,
    borderColor: "#605f5f",
    borderTopWidth: 0.5,
    height: 64,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    borderStyle: "solid",
    flexDirection: "row",
    width: 390,
    left: 0,
    position: "absolute",
  },
  addItemsTo: {
    fontWeight: "600",
    fontFamily: FontFamily.lexendSemibold,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_smi,
  },
  addItemsToCartWrapper: {
    top: 724,
    left: 110,
    backgroundColor: Color.lightcyan,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
  },
  scannedItems: {
    top: 554,
    left: 40,
    color: Color.black,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.lexendRegular,
    position: "absolute",
  },
  locationOnIcon1: {
    width: 15,
    height: 15,
  },
  hebHancockCenter: {
    fontFamily: FontFamily.interRegular,
    marginLeft: 5,
    color: Color.white,
  },
  location: {
    top: 67,
    left: 32,
    backgroundColor: Color.darkgray_200,
    padding: Padding.p_3xs,
  },
  barcodeScanner02: {
    flex: 1,
    overflow: "hidden",
    height: 846,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default BarcodeScanner02;
