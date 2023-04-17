import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const About = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.about}
      onPress={() => navigation.navigate("FindAStore")}
    >
      <EcoCartContainer
        productIds={require("../assets/ecocart-icon6.png")}
        productDimensions={require("../assets/account-circle.png")}
        propRight="unset"
        propWidth={390}
        propRight1="unset"
        propWidth1={390}
        propRight2="unset"
        propWidth2={344}
        onAccountCirclePress={() => navigation.navigate("Profile")}
      />
      <Text style={[styles.about1, styles.about1Typo]}>About</Text>
      <View
        style={[styles.howWeCalculateYourSustaina, styles.featuresPosition]}
      >
        <Text style={[styles.howWeCalculate, styles.about1Typo]}>
          How we calculate your sustainability score
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.textTypo]}>
          Lorem ipsum dolor sit amet consectetur. Proin velit in blandit
          malesuada consectetur diam duis. Tristique tincidunt nec faucibus et
          pulvinar libero massa pharetra nisi. Lacus tristique duis egestas
          neque quam neque scelerisque quis amet. Nec tellus suscipit
          consectetur sit ut. Ornare pellentesque scelerisque blandit in arcu
          quis nulla montes. Non tristique ac amet mattis auctor odio id sit.
        </Text>
      </View>
      <View style={[styles.features, styles.featuresPosition]}>
        <Text style={[styles.howWeCalculate, styles.about1Typo]}>Features</Text>
        <Text style={[styles.text, styles.textTypo]}>{` 
 
 
 
`}</Text>
      </View>
      <View style={styles.navBar}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/location-on1.png")}
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
    </Pressable>
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
