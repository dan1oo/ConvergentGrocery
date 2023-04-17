import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Rewards1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rewards}>
      <EcoCartContainer
        productIds={require("../assets/ecocart-icon7.png")}
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
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/location-on1.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/shopping-cart.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/barcode-scanner.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/article2.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/auto-awesome1.png")}
        />
      </View>
      <View style={styles.storesGallery}>
        <View style={styles.row1}>
          <Image
            style={styles.hebIconLayout1}
            resizeMode="cover"
            source={require("../assets/heb5.png")}
          />
          <Image
            style={[styles.hebIcon1, styles.hebIconLayout1]}
            resizeMode="cover"
            source={require("../assets/heb6.png")}
          />
          <Image
            style={[styles.wheatsvilleIcon, styles.hebIconLayout1]}
            resizeMode="cover"
            source={require("../assets/wheatsville31.png")}
          />
          <Image
            style={[styles.wheatsvilleIcon, styles.hebIconLayout1]}
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
      <View style={styles.stores}>
        <View style={[styles.wheatsville, styles.wholeFoodsPosition1]}>
          <View style={[styles.wheatsvilleChild, styles.childShadowBox]} />
          <Image
            style={[styles.wheatsvilleIcon1, styles.hebIconLayout]}
            resizeMode="cover"
            source={require("../assets/wheatsville2.png")}
          />
          <View style={[styles.storePoints, styles.storeFlexBox]}>
            <Image
              style={styles.autoAwesomeIcon1}
              resizeMode="cover"
              source={require("../assets/auto-awesome2.png")}
            />
            <Text style={styles.pts}>57 PTS</Text>
          </View>
        </View>
        <View style={styles.heb}>
          <View style={[styles.hebChild, styles.childShadowBox]} />
          <Image
            style={[styles.hebIcon2, styles.hebIconLayout]}
            resizeMode="cover"
            source={require("../assets/heb8.png")}
          />
          <View style={[styles.storePoints1, styles.storeFlexBox]}>
            <Image
              style={styles.autoAwesomeIcon1}
              resizeMode="cover"
              source={require("../assets/auto-awesome2.png")}
            />
            <Text style={styles.pts}>75 PTS</Text>
          </View>
        </View>
        <View style={[styles.wholeFoods, styles.wholeFoodsPosition]}>
          <View style={[styles.wholeFoodsChild, styles.childShadowBox]} />
          <Image
            style={[styles.hebIcon3, styles.hebIconLayout]}
            resizeMode="cover"
            source={require("../assets/heb4.png")}
          />
          <View style={[styles.storePoints, styles.storeFlexBox]}>
            <Image
              style={styles.autoAwesomeIcon1}
              resizeMode="cover"
              source={require("../assets/auto-awesome2.png")}
            />
            <Text style={styles.pts}>13 PTS</Text>
          </View>
        </View>
        <View style={[styles.centralMarket, styles.wholeFoodsPosition]}>
          <View style={[styles.centralMarketChild, styles.childShadowBox]} />
          <Image
            style={[styles.wheatsvilleIcon1, styles.hebIconLayout]}
            resizeMode="cover"
            source={require("../assets/central-market2.png")}
          />
          <View style={[styles.storePoints3, styles.storeFlexBox]}>
            <Image
              style={styles.autoAwesomeIcon1}
              resizeMode="cover"
              source={require("../assets/auto-awesome2.png")}
            />
            <Text style={styles.pts}>29 PTS</Text>
          </View>
        </View>
      </View>
      <Text style={styles.rewards1}>Rewards</Text>
      <Text style={[styles.saved, styles.savedTypo]}>{`$120 Saved `}</Text>
      <Text style={[styles.nextCheckpoint100, styles.savedTypo]}>
        Next Checkpoint: 100 PTS
      </Text>
      <Text style={[styles.totalTrips, styles.savedTypo]}>5 Total Trips</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 24,
    width: 24,
  },
  hebIconLayout1: {
    height: 60,
    width: 60,
  },
  row02Layout: {
    backgroundColor: Color.gainsboro_300,
    borderRadius: Border.br_81xl,
    height: 60,
    width: 60,
  },
  wholeFoodsPosition1: {
    bottom: "34.63%",
    top: "34.63%",
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
    height: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  hebIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "16.67%",
    top: "16.67%",
    height: "66.67%",
    position: "absolute",
    overflow: "hidden",
  },
  storeFlexBox: {
    alignItems: "center",
    top: 125,
    flexDirection: "row",
    position: "absolute",
  },
  wholeFoodsPosition: {
    left: "0.91%",
    right: "53.64%",
    width: "45.45%",
    height: "30.74%",
    position: "absolute",
  },
  savedTypo: {
    height: 22,
    width: 135,
    left: 203,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.leagueGothicRegular,
    letterSpacing: 0.4,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  navBar: {
    top: 780,
    left: 0,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 0.5,
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
    left: 30,
    display: "none",
    position: "absolute",
  },
  wheatsvilleChild: {
    backgroundColor: Color.purple,
  },
  wheatsvilleIcon1: {
    left: "16.67%",
    right: "16.67%",
    width: "66.67%",
    maxWidth: "100%",
    bottom: "16.67%",
    top: "16.67%",
    height: "66.67%",
    borderRadius: Border.br_81xl,
  },
  autoAwesomeIcon1: {
    width: 15,
    height: 15,
  },
  pts: {
    width: 45,
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.leagueGothicRegular,
    letterSpacing: 0.4,
    fontSize: FontSize.size_mini,
    color: Color.white,
  },
  storePoints: {
    left: 86,
    width: 64,
    alignItems: "center",
    top: 125,
  },
  wheatsville: {
    left: "54.55%",
    right: "0%",
    width: "45.45%",
    height: "30.74%",
    bottom: "34.63%",
    top: "34.63%",
    position: "absolute",
  },
  hebChild: {
    backgroundColor: Color.red,
  },
  hebIcon2: {
    width: "28.79%",
    right: "61.21%",
    left: "10%",
    maxWidth: "100%",
    bottom: "16.67%",
    top: "16.67%",
    height: "66.67%",
  },
  storePoints1: {
    left: 259,
    width: 71,
    alignItems: "center",
    top: 125,
  },
  heb: {
    bottom: "69.26%",
    left: "0%",
    top: "0%",
    right: "0%",
    height: "30.74%",
    position: "absolute",
    width: "100%",
  },
  wholeFoodsChild: {
    backgroundColor: Color.seagreen_200,
  },
  hebIcon3: {
    left: "16.67%",
    right: "16.67%",
    width: "66.67%",
    maxWidth: "100%",
    bottom: "16.67%",
    top: "16.67%",
    height: "66.67%",
  },
  wholeFoods: {
    bottom: "34.63%",
    top: "34.63%",
    left: "0.91%",
    right: "53.64%",
  },
  centralMarketChild: {
    backgroundColor: Color.seagreen_100,
  },
  storePoints3: {
    left: 83,
    width: 64,
    alignItems: "center",
    top: 125,
  },
  centralMarket: {
    top: "69.26%",
    bottom: "0%",
    left: "0.91%",
    right: "53.64%",
  },
  stores: {
    height: "57.82%",
    width: "84.62%",
    top: "17.42%",
    right: "7.69%",
    bottom: "24.76%",
    left: "7.69%",
    position: "absolute",
  },
  rewards1: {
    top: 51,
    left: 33,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  saved: {
    top: 167,
  },
  nextCheckpoint100: {
    top: 193,
  },
  totalTrips: {
    top: 219,
  },
  rewards: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Rewards1;
