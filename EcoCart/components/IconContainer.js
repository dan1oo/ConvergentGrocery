import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const IconContainer = () => {
  return (
    <View style={styles.icons}>
      <View style={styles.iconLine04}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/arrow-back.png")}
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
          source={require("../assets/eco.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/account-circle1.png")}
        />
      </View>
      <View style={styles.iconSpaceBlock}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/location-on1.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/search1.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/share-location.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/explore.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/location-chip.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/near-me1.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/near-me2.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/my-location1.png")}
        />
      </View>
      <View style={styles.iconSpaceBlock}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/auto-awesome.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/stars.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/article.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/flash-off1.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/flash-on.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/done.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/check-box.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/check-box-outline-blank.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/check-circle.png")}
        />
      </View>
      <View style={[styles.iconLine03, styles.iconSpaceBlock]}>
        <Image
          style={[styles.shoppingCartIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/shoppingcart.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/shoppingcartwhite.png")}
        />
        <Image
          style={styles.defaultStoreLogo}
          resizeMode="cover"
          source={require("../assets/default-store-logo.png")}
        />
        <Image
          style={styles.checkpointIcon}
          resizeMode="cover"
          source={require("../assets/checkpoint2.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/redeem.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/delete.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
  },
  iconSpaceBlock: {
    marginTop: 25,
    flexDirection: "row",
  },
  shoppingCartIcon: {
    marginLeft: 42,
  },
  iconLine04: {
    flexDirection: "row",
  },
  shoppingCartIcon1: {
    overflow: "hidden",
  },
  defaultStoreLogo: {
    width: 40,
    height: 40,
    marginLeft: 42,
  },
  checkpointIcon: {
    width: 10,
    height: 10,
    marginLeft: 42,
  },
  iconLine03: {
    alignItems: "center",
  },
  icons: {
    position: "absolute",
    top: 211,
    left: 40,
  },
});

export default IconContainer;
