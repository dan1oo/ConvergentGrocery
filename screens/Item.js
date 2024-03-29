import * as React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ItemContainer from "../components/ItemContainer";
import EcoCartContainer from "../components/EcoCartContainer";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import { useState, useEffect } from 'react';

const Item = () => {
  const navigation = useNavigation();
   const { score, sustainability_product, sustainability_brand } = useRoute().params ?? {};
  
  // Create a new state variable to store the sustainability information
  const [sustainabilityInfo, setSustainabilityInfo] = useState('');
  // Fetch the sustainability information and update the state when the component mounts
  

  return (
    <View style={styles.item}>
      <Image
        style={[styles.itemChild, styles.navBarLayout]}
        resizeMode="cover"
        source={require("../assets/vector-3.png")}
      />
      <ItemContainer />
      
      <EcoCartContainer
        productIds={require("../assets/ecocart-icon3.png")}
        productDimensions={require("../assets/account-circle.png")}
        propRight="unset"
        propWidth={390}
        propRight1="unset"
        propWidth1={390}
        propRight2="unset"
        propWidth2={344}
        onAccountCirclePress={() => navigation.navigate("Profile")}
      />
      <Text
        style={styles.sustainabilityDetailsProd}
      >{`Sustainability Details of the product: `}{sustainability_product}</Text>
      <Text
        style={styles.sustainabilityDetailsBrand}
      >{`Sustainability Details of the brand: `}{sustainability_brand}</Text>
      <Pressable
        style={[styles.arrowBack, styles.iconLayout]}
        onPress={() => navigation.navigate("CartList")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-back2.png")}
        />
      </Pressable>
      <View style={[styles.navBar, styles.itemFlexBox]}>
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
          onPress={() => navigation.navigate("TripReport", {"score":score})}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/article.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          onPress={() => navigation.navigate("Rewards")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/auto-awesome.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarLayout: {
    width: 390,
    left: 0,
  },container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  itemFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  itemChild: {
    top: 259,
    height: 381,
    display: "none",
    position: "absolute",
  },
  itemItem: {
    top: 286,
    left: 28,
    borderRadius: Border.br_8xs,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 332,
    height: 242,
    paddingHorizontal: 134,
    paddingVertical: 86,
  },
  sustainabilityDetailsProd: {
    top: 258,
    left: 31,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.lexendRegular,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
    height: "20%",
    width: "80%"
  },
  sustainabilityDetailsBrand: {
    top: 558,
    left: 31,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.lexendRegular,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
    height: "20%",
    width: "80%"
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowBack: {
    left: 23,
    top: 58,
    position: "absolute",
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  navBar: {
    top: 782,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    height: 64,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    width: 390,
    left: 0,
  },
  item: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 846,
    overflow: "hidden",
    width: "100%",
  },
});

export default Item;
