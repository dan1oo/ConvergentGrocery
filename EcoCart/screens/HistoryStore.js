import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HistoryStore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.historyStore}>
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
      <View style={styles.storesGallery}>
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
            style={[styles.wheatsvilleIcon, styles.hebIconLayout]}
            resizeMode="cover"
            source={require("../assets/wheatsville.png")}
          />
          <Image
            style={[styles.wheatsvilleIcon, styles.hebIconLayout]}
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
      <View style={styles.stores}>
        <View style={styles.wheatsville}>
          <View style={[styles.wheatsvilleChild, styles.childShadowBox]} />
          <Image
            style={[styles.wheatsvilleIcon1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/wheatsville2.png")}
          />
          <View style={[styles.storePoints, styles.storePosition]}>
            <Image
              style={styles.autoAwesomeIcon1}
              resizeMode="cover"
              source={require("../assets/auto-awesome2.png")}
            />
            <Text style={styles.pts}>57 PTS</Text>
          </View>
        </View>
        <View style={[styles.heb, styles.hebPosition]}>
          <View style={[styles.hebChild, styles.childShadowBox]} />
          <Image
            style={styles.iconPosition}
            resizeMode="cover"
            source={require("../assets/heb9.png")}
          />
          <View style={[styles.storePoints, styles.storePosition]}>
            <Image
              style={styles.autoAwesomeIcon1}
              resizeMode="cover"
              source={require("../assets/auto-awesome2.png")}
            />
            <Text style={styles.pts}>75 PTS</Text>
          </View>
        </View>
        <View style={[styles.wholeFoods, styles.hebPosition]}>
          <View style={[styles.wholeFoodsChild, styles.childShadowBox]} />
          <Image
            style={styles.iconPosition}
            resizeMode="cover"
            source={require("../assets/heb10.png")}
          />
          <View style={[styles.storePoints, styles.storePosition]}>
            <Image
              style={styles.autoAwesomeIcon1}
              resizeMode="cover"
              source={require("../assets/auto-awesome2.png")}
            />
            <Text style={styles.pts}>13 PTS</Text>
          </View>
        </View>
        <View style={styles.centralMarket}>
          <View style={[styles.centralMarketChild, styles.childShadowBox]} />
          <Image
            style={[styles.wheatsvilleIcon1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/central-market2.png")}
          />
          <View style={[styles.storePoints3, styles.storePosition]}>
            <Image
              style={styles.autoAwesomeIcon1}
              resizeMode="cover"
              source={require("../assets/auto-awesome2.png")}
            />
            <Text style={styles.pts}>29 PTS</Text>
          </View>
        </View>
      </View>
      <Text style={styles.history}>History</Text>
      <View style={styles.options}>
        <View style={[styles.stores1, styles.tripsBorder]}>
          <Text style={[styles.stores2, styles.trips1Typo]}>Stores</Text>
        </View>
        <Pressable
          style={[styles.trips, styles.tripsBorder]}
          onPress={() => navigation.navigate("HistoryTrips")}
        >
          <Text style={[styles.trips1, styles.trips1Typo]}>Trips</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
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
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_mini,
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  iconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "16.67%",
    bottom: "16.67%",
    right: "16.67%",
    top: "16.67%",
    width: "66.67%",
    height: "66.67%",
    position: "absolute",
    overflow: "hidden",
  },
  storePosition: {
    width: 64,
    top: 125,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  hebPosition: {
    bottom: "53.13%",
    top: "0%",
    width: "44.91%",
    height: "46.88%",
    position: "absolute",
  },
  tripsBorder: {
    borderWidth: 1,
    borderRadius: Border.br_6xl,
    justifyContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
  trips1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_mini,
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
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    borderStyle: "solid",
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
    left: 30,
    position: "absolute",
  },
  wheatsvilleChild: {
    backgroundColor: Color.purple,
  },
  wheatsvilleIcon1: {
    borderRadius: Border.br_81xl,
  },
  autoAwesomeIcon1: {
    width: 15,
    height: 15,
  },
  pts: {
    letterSpacing: 0.4,
    fontFamily: FontFamily.leagueGothicRegular,
    textAlign: "left",
    width: 45,
    marginLeft: 4,
    color: Color.white,
    fontSize: FontSize.size_mini,
  },
  storePoints: {
    left: 86,
    alignItems: "center",
  },
  wheatsville: {
    right: "54.79%",
    left: "0.3%",
    bottom: "0%",
    top: "53.13%",
    width: "44.91%",
    height: "46.88%",
    position: "absolute",
  },
  hebChild: {
    backgroundColor: Color.red,
  },
  heb: {
    right: "55.09%",
    left: "0%",
    bottom: "53.13%",
  },
  wholeFoodsChild: {
    backgroundColor: Color.seagreen_200,
  },
  wholeFoods: {
    right: "0.6%",
    left: "54.49%",
  },
  centralMarketChild: {
    backgroundColor: Color.seagreen_100,
  },
  storePoints3: {
    left: 83,
    alignItems: "center",
  },
  centralMarket: {
    left: "55.09%",
    right: "0%",
    bottom: "0%",
    top: "53.13%",
    width: "44.91%",
    height: "46.88%",
    position: "absolute",
  },
  stores: {
    height: "37.91%",
    width: "85.64%",
    top: "21.21%",
    right: "6.67%",
    bottom: "40.88%",
    left: "7.69%",
    position: "absolute",
  },
  history: {
    top: 51,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    color: Color.white,
    left: 30,
    position: "absolute",
  },
  stores2: {
    color: Color.gray_600,
  },
  stores1: {
    backgroundColor: Color.gainsboro_200,
    borderColor: "#b1b1b1",
    width: 102,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
  },
  trips1: {
    color: Color.silver_200,
  },
  trips: {
    borderColor: "#e1e1e1",
    width: 90,
    padding: Padding.p_8xs,
    marginLeft: 15,
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: Border.br_6xl,
  },
  options: {
    top: 124,
    left: 33,
    flexDirection: "row",
    position: "absolute",
  },
  historyStore: {
    flex: 1,
    height: 844,
    opacity: 0.3,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default HistoryStore;
