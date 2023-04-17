import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import PreviousTripsContainer from "../components/PreviousTripsContainer";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HistoryTrips = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.historyTrips}>
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
          source={require("../assets/article1.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/auto-awesome.png")}
        />
      </View>
      <View style={[styles.storesGallery, styles.storesGalleryPosition]}>
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
      <Text style={styles.history}>History</Text>
      <View style={styles.options}>
        <View style={[styles.trips, styles.tripsBorder]}>
          <Text style={[styles.stores, styles.storesTypo]}>Stores</Text>
        </View>
        <View style={[styles.stores1, styles.tripsBorder]}>
          <Text style={[styles.trips1, styles.storesTypo]}>Trips</Text>
        </View>
      </View>
      <PreviousTripsContainer
        frame35Top={218}
        onStoreDetailsPress={() => navigation.navigate("TripReport")}
        onStoreDetailsPress1={() => navigation.navigate("TripReport")}
        onStoreDetailsPress2={() => navigation.navigate("TripReport")}
        onStoreDetailsPress3={() => navigation.navigate("TripReport")}
        onStoreDetailsPress4={() => navigation.navigate("TripReport")}
      />
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.score, styles.dateTypo]}>Score</Text>
      <View style={[styles.historyTripsChild, styles.storesGalleryPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
  },
  storesGalleryPosition: {
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
  tripsBorder: {
    borderWidth: 1,
    borderRadius: Border.br_6xl,
    justifyContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
  storesTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  dateTypo: {
    textAlign: "left",
    color: Color.gray_500,
    fontFamily: FontFamily.lexendMedium,
    fontSize: FontSize.size_3xs,
    top: 179,
    fontWeight: "500",
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
    borderTopWidth: 0.5,
    borderStyle: "solid",
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
  history: {
    top: 51,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    left: 30,
    position: "absolute",
  },
  stores: {
    color: Color.silver_200,
  },
  trips: {
    borderColor: "#e1e1e1",
    width: 90,
    padding: Padding.p_8xs,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  trips1: {
    color: Color.gray_600,
  },
  stores1: {
    backgroundColor: Color.gainsboro_200,
    borderColor: "#b1b1b1",
    width: 102,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    marginLeft: 15,
  },
  options: {
    top: 123,
    left: 33,
    flexDirection: "row",
    position: "absolute",
  },
  date: {
    left: 36,
  },
  score: {
    left: 313,
  },
  historyTripsChild: {
    top: 197,
    borderColor: "#a7a7a7",
    width: 331,
    height: 1,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    left: 30,
  },
  historyTrips: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    opacity: 0.3,
    backgroundColor: Color.white,
  },
});

export default HistoryTrips;
