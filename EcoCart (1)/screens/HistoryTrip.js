import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import TripDateContainer from "../components/TripDateContainer";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HistoryTrip = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.historyTrip}>
      <EcoCartContainer
        productIds={require("../assets/ecocart-icon2.png")}
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
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/article1.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/auto-awesome.png")}
        />
      </View>
      <View style={[styles.storesGallery, styles.historyPosition]}>
        <View style={styles.row1}>
          <Image
            style={styles.hebIconLayout}
            resizeMode="cover"
            source={require("../assets/heb5.png")}
          />
          <Image
            style={[styles.hebIcon1, styles.hebIconLayout]}
            resizeMode="cover"
            source={require("../assets/heb6.png")}
          />
          <Image
            style={styles.wheatsvilleIcon}
            resizeMode="cover"
            source={require("../assets/wheatsville3.png")}
          />
          <Image
            style={styles.wheatsvilleIcon}
            resizeMode="cover"
            source={require("../assets/central-market3.png")}
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
      <Text style={[styles.history, styles.historyPosition]}>History</Text>
      <TripDateContainer />
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.score, styles.dateTypo]}>Score</Text>
      <View style={[styles.historyTripChild, styles.historyPosition]} />
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
  historyPosition: {
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
  dateTypo: {
    textAlign: "left",
    color: Color.gray_500,
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: 140,
    position: "absolute",
  },
  shoppingCartIcon: {
    marginLeft: 44,
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
    borderTopWidth: 0.5,
    borderStyle: "solid",
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
  history: {
    top: 51,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
  },
  date: {
    left: 36,
  },
  score: {
    left: 313,
  },
  historyTripChild: {
    top: 158,
    borderColor: "#a7a7a7",
    width: 331,
    height: 1,
    borderTopWidth: 0.5,
    borderStyle: "solid",
  },
  historyTrip: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default HistoryTrip;
