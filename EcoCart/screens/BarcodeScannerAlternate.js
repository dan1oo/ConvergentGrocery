import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import Item3 from "../components/Item3";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const BarcodeScannerAlternate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.barcodeScannerAlternate}>
      <Image
        style={styles.backgroundPictureIcon}
        resizeMode="cover"
        source={require("../assets/backgroundpicture.png")}
      />
      <Image
        style={styles.backgroundPictureIcon1}
        resizeMode="cover"
        source={require("../assets/backgroundpicture1.png")}
      />
      <EcoCartContainer
        productIds={require("../assets/ecocart-icon2.png")}
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
        <Text style={[styles.centerBarcodeAnd, styles.addedToCartTypo]}>
          Center barcode and hold until scanning is complete
        </Text>
      </View>
      <View style={styles.flash}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/flash-off.png")}
        />
      </View>
      <View style={styles.backgroundPictureIcon1}>
        <View style={styles.cameraSectionParent}>
          <View style={styles.cameraSection} />
          <Image
            style={[styles.image1Icon, styles.image1IconPosition]}
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
        <Pressable 
          style={styles.iconLayout} onPress={() => navigation.navigate("Map1")}>
          <Image
            resizeMode="cover"
            source={require("../assets/location-on3.png")}
         />
        </Pressable>
        <Pressable 
          style={[styles.shoppingCartIcon, styles.iconLayout]} onPress={() => navigation.navigate("CartList")}>
          <Image
            resizeMode="cover"
            source={require("../assets/shopping-cart2.png")}
          />
        </Pressable>
        <Pressable 
          style={[styles.shoppingCartIcon, styles.iconLayout]} onPress={() => navigation.navigate("BarcodeScannerAlternate")}>
          <Image
            resizeMode="cover"
            source={require("../assets/barcode-scanner1.png")}
         />
        </Pressable>
        <Pressable 
          style={[styles.shoppingCartIcon, styles.iconLayout]} onPress={() => navigation.navigate("TripReport")}>
          <Image
            resizeMode="cover"
            source={require("../assets/article3.png")}
          />
        </Pressable>
        <Pressable 
          style={[styles.shoppingCartIcon, styles.iconLayout]} onPress={() => navigation.navigate("Rewards")}>
          <Image
            resizeMode="cover"
            source={require("../assets/auto-awesome5.png")}
          />
        </Pressable>
      </View>
      
      <Pressable
        style={[styles.viewItemsInCartWrapper, styles.locationFlexBox]}
        onPress={() => navigation.navigate("CartList")}
      >
        <Text style={styles.viewItemsIn}>View Items in Cart</Text>
      </Pressable>
      <View style={[styles.location, styles.locationFlexBox]}>
        <Image
          style={styles.locationOnIcon1}
          resizeMode="cover"
          source={require("../assets/location-on4.png")}
        />
        <Text style={styles.hebHancockCenter}>HEB, Hancock Center</Text>
      </View>
      <Item3 />
      <Text style={[styles.addedToCart, styles.image1IconPosition]}>
        Added to Cart:
      </Text>
      <View style={styles.barcodeScannerAlternateChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  addedToCartTypo: {
    fontFamily: FontFamily.lexendRegular,
    color: Color.white,
    fontSize: FontSize.size_smi,
  },
  image1IconPosition: {
    left: 37,
    position: "absolute",
  },
  iconLayout: {
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
  backgroundPictureIcon: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
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
    width: 183,
    height: 106,
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
  shoppingCartIcon: {
    marginLeft: 44,
  },
  navBar: {
    top: 782,
    backgroundColor: Color.black,
    borderColor: "#605f5f",
    height: 64,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    borderTopWidth: 0.5,
    borderStyle: "solid",
    flexDirection: "row",
    width: 390,
    left: 0,
    position: "absolute",
  },
  viewItemsIn: {
    fontWeight: "600",
    fontFamily: FontFamily.lexendSemibold,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  viewItemsInCartWrapper: {
    top: 724,
    left: 100,
    backgroundColor: Color.lightcyan,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
  },
  locationOnIcon1: {
    width: 15,
    height: 15,
  },
  hebHancockCenter: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    marginLeft: 5,
    textAlign: "left",
    color: Color.white,
  },
  location: {
    top: 67,
    left: 32,
    backgroundColor: Color.darkgray_200,
    padding: Padding.p_3xs,
  },
  addedToCart: {
    top: 570,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.lexendRegular,
    fontSize: FontSize.size_smi,
  },
  barcodeScannerAlternateChild: {
    top: 594,
    borderColor: "#a7a7a7",
    width: 331,
    height: 1,
    borderTopWidth: 0.5,
    left: 37,
    borderStyle: "solid",
    position: "absolute",
  },
  barcodeScannerAlternate: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 846,
  },
});

export default BarcodeScannerAlternate;
