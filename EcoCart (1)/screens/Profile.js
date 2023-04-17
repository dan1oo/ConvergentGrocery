import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={styles.navBar}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/location-on1.png")}
        />
        <Pressable 
          style={[styles.shoppingCartIcon, styles.iconLayout]} onPress={() => navigation.navigate("CartList")}>
          <Image
            style={[styles.shoppingCartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/shopping-cart.png")}
          />
        </Pressable>
        <Pressable 
          style={[styles.shoppingCartIcon, styles.iconLayout]} onPress={() => navigation.navigate("BarcodeScannerAlternate")}>
          <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/barcode-scanner.png")}
        />
        </Pressable>
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/article.png")}
        />
        <Pressable 
          style={[styles.shoppingCartIcon, styles.iconLayout]} onPress={() => navigation.navigate("Rewards")}>
          <Image
            style={[styles.shoppingCartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/auto-awesome.png")}
          />
        </Pressable>
      </View>
      <EcoCartContainer
        productIds={{ uri: "46x48x1809583521" }}
        productDimensions={require("../assets/account-circle2.png")}
        propRight="unset"
        propWidth={390}
        propRight1="unset"
        propWidth1={390}
        propRight2="unset"
        propWidth2={344}
        onAccountCirclePress={() => navigation.navigate("Profile")}
      />
      <Text style={styles.averageSustainabilityScore}>
        Average Sustainability Score
      </Text>
      <Image
        style={styles.profileChild}
        resizeMode="cover"
        source={require("../assets/ellipse-29.png")}
      />
      <View style={[styles.profileItem, styles.profileLayout]} />
      <View style={[styles.profileInner, styles.profileLayout]} />
      <View style={[styles.rectangleView, styles.profileLayout]} />
      <View style={styles.frameView} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
  },
  profileLayout: {
    height: 14,
    backgroundColor: Color.gainsboro_300,
    position: "absolute",
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  navBar: {
    top: 783,
    left: 0,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    width: 390,
    height: 64,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Color.white,
  },
  averageSustainabilityScore: {
    top: 272,
    left: 46,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.lexendRegular,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  profileChild: {
    top: 133,
    left: 53,
    width: 70,
    height: 70,
    position: "absolute",
  },
  profileItem: {
    top: 144,
    width: 158,
    left: 151,
    height: 14,
    backgroundColor: Color.gainsboro_300,
  },
  profileInner: {
    top: 168,
    width: 158,
    left: 151,
    height: 14,
    backgroundColor: Color.gainsboro_300,
  },
  rectangleView: {
    top: 192,
    left: 149,
    width: 66,
    height: 14,
    backgroundColor: Color.gainsboro_300,
  },
  frameView: {
    top: 429,
    left: 251,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 847,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Profile;
