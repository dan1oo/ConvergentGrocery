import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import StoreRewardsContainer from "../components/StoreRewardsContainer";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Rewards = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rewards}>
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
      <View style={[styles.navBar, styles.navBarBorder]}>
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
        <Pressable
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          onPress={() => navigation.navigate("TripHistory")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/article2.png")}
          />
        </Pressable>
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/auto-awesome1.png")}
        />
      </View>
      <View style={[styles.storesGallery, styles.rewardsChildPosition]}>
        <View style={styles.row1}>
          <Image
            style={styles.hebIconLayout}
            resizeMode="cover"
            source={require("../assets/heb.png")}
          />
          <Image
            style={[styles.hebIcon1, styles.hebIconLayout]}
            resizeMode="cover"
            source={require("../assets/heb1.png")}
          />
          <Image
            style={styles.wheatsvilleIcon}
            resizeMode="cover"
            source={require("../assets/wheatsville.png")}
          />
          <Image
            style={styles.wheatsvilleIcon}
            resizeMode="cover"
            source={require("../assets/central-market.png")}
          />
        </View>
        <View style={styles.row02}>
          <View style={styles.row02Layout} />
          <View style={[styles.row02Item, styles.row02Layout]} />
          <View style={[styles.row02Item, styles.row02Layout]} />
          <View style={[styles.row02Item, styles.row02Layout]} />
        </View>
        <View style={styles.row02}>
          <View style={styles.row02Layout} />
          <View style={[styles.row02Item, styles.row02Layout]} />
          <View style={[styles.row02Item, styles.row02Layout]} />
          <View style={[styles.row02Item, styles.row02Layout]} />
        </View>
      </View>
      <StoreRewardsContainer />
      <Text style={styles.rewards1}>Rewards</Text>
      <View style={[styles.rewardsChild, styles.rewardsChildPosition]} />
      <View style={styles.autoAwesomeParent}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/auto-awesome3.png")}
        />
        <Text style={styles.rewardsFromStores}>
          Rewards from stores you’ve visited
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarBorder: {
    borderTopWidth: 0.5,
    borderStyle: "solid",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  rewardsChildPosition: {
    left: 30,
    position: "absolute",
  },
  hebIconLayout: {
    height: 60,
    width: 60,
  },
  row02Layout: {
    backgroundColor: Color.gainsboro_300,
    borderRadius: Border.br_81xl,
    height: 60,
    width: 60,
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
    left: 0,
    borderColor: "#e8e8e8",
    borderBottomWidth: 0.5,
    width: 390,
    height: 64,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.white,
  },
  hebIcon1: {
    marginLeft: 30,
  },
  wheatsvilleIcon: {
    borderRadius: Border.br_81xl,
    marginLeft: 30,
    height: 60,
    width: 60,
  },
  row1: {
    flexDirection: "row",
  },
  row02Item: {
    marginLeft: 30,
  },
  row02: {
    marginTop: 19,
    display: "none",
    flexDirection: "row",
  },
  storesGallery: {
    top: 204,
    display: "none",
  },
  rewards1: {
    top: 51,
    left: 33,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  rewardsChild: {
    top: 153,
    borderColor: "#d6d6d6",
    width: 331,
    height: 1,
    borderTopWidth: 0.5,
    borderStyle: "solid",
  },
  rewardsFromStores: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.tan,
    textAlign: "left",
    marginLeft: 8,
  },
  autoAwesomeParent: {
    top: 126,
    left: 31,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rewards: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Rewards;
