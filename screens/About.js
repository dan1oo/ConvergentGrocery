import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const About = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <EcoCartContainer
        productIds={{ uri: "46x48x50285295" }}
        productDimensions={require("../assets/account-circle.png")}
        propRight="unset"
        propWidth={390}
        propRight1="unset"
        propWidth1={390}
        propRight2="unset"
        propWidth2={344}
        onAccountCirclePress={() => navigation.navigate("Profile")}
      />
      {/* <EcoCartContainer
          productIds={require("../assets/ecocart-icon6.png")}
          productDimensions={require("../assets/account-circle.png")}
          propRight="unset"
          propWidth={390}
          propRight1="unset"
          propWidth1={390}
          propRight2="unset"
          propWidth2={344}
          onAccountCirclePress={() => navigation.navigate("Profile")}
        /> */}
      <View style={[styles.navBar, styles.navBarFlexBox]}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("FindAStore02")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/location-on1.png")}
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
      <Text style={[styles.about1, styles.about1Typo]}>About</Text>
      <View
        style={[styles.howWeCalculateYourSustaina, styles.featuresPosition]}
      >
        <Text style={[styles.howWeCalculate, styles.about1Typo]}>
          How we calculate your sustainability score
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.textTypo]}>
          EcoCart''s formula accounts for the products net carbon footprint from the initial stage of growing ingredients to its final stage of distribution and transportation to grocery stores. Along the way, other factors including processing, packaging, and agricultural practices are also considered.
        </Text>
      </View>
      <View style={[styles.features, styles.featuresPosition]}>
        <Text style={[styles.howWeCalculate, styles.about1Typo]}>Features</Text>
        <Text style={[styles.text, styles.textTypo]}>EcoCart has a food score calculator as well as detailed a product and brand sustainability report. Our barcode scanner allows for quick scanning of items whose sustainability can be analyzed in real time.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about1Typo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  featuresPosition: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_xl,
    paddingHorizontal: Padding.p_xl,
    width: 330,
    borderWidth: 1,
    borderColor: "#ececec",
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_8xs,
    left: 30,
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    marginTop: 15,
    width: 300,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_3xs,
    color: Color.black,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  about1: {
    top: 127,
    left: 31,
    fontSize: FontSize.size_6xl,
    position: "absolute",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  howWeCalculate: {
    fontSize: FontSize.size_2xs,
    display: "flex",
    width: 246,
    justifyContent: "center",
    alignItems: "center",
  },
  loremIpsumDolor: {
    height: 111,
  },
  howWeCalculateYourSustaina: {
    top: 189,
    alignItems: "center",
  },
  text: {
    height: 80,
  },
  features: {
    top: 379,
    height: 152,
    alignItems: "center",
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  navBar: {
    top: 780,
    left: 0,
    borderColor: "#e8e8e8",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    width: 390,
    height: 64,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  about: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    display: "none",
    backgroundColor: Color.white,
  },
});

export default About;
