import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { ProgressBar as RNPProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import EcoCartContainer from "../components/EcoCartContainer";
import RewardsContainer from "../components/RewardsContainer";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const StoreRewards = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.storeRewards}>
      <View style={styles.popUp} />
      <View style={[styles.navBar, styles.navBarBorder, styles.navBarFlexBox]}>
        <Pressable
          style={styles.arrowBackLayout}
          onPress={() => navigation.navigate("FindAStore02")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/location-on1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.shoppingCartIcon, styles.arrowBackLayout]}
          onPress={() => navigation.navigate("CartList")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/shopping-cart.png")}
          />
        </Pressable>
        <Pressable 
          style={[styles.shoppingCartIcon, styles.arrowBackLayout]} onPress={() => navigation.navigate("BarcodeScanner")}>
          <Image
            resizeMode="cover"
            source={require("../assets/barcode-scanner.png")}
         />
        </Pressable>
        <Pressable
          style={[styles.shoppingCartIcon, styles.arrowBackLayout]}
          onPress={() => navigation.navigate("TripReport")}
        >
          <Image resizeMode="cover" source={require("../assets/article2.png")} />
        </Pressable>
        <Pressable
          style={[styles.shoppingCartIcon, styles.arrowBackLayout]}
          onPress={() => navigation.navigate("Rewards")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/auto-awesome1.png")}
          />
        </Pressable>
      </View>
      <EcoCartContainer
        productIds={require("../assets/ecocart-icon5.png")}
        productDimensions={require("../assets/account-circle.png")}
        onAccountCirclePress={() => navigation.navigate("Profile")}
      />
      <View style={[styles.autoAwesomeParent, styles.parentPosition]}>
        <Image
          style={styles.autoAwesomeIcon1}
          resizeMode="cover"
          source={require("../assets/auto-awesome6.png")}
        />
        <Text
          style={[styles.pointsBalanceAt, styles.text5Typo]}
        >{`Points Balance at HEB: `}</Text>
      </View>
      <View style={[styles.redeemParent, styles.parentPosition]}>
        <Image
          style={styles.autoAwesomeIcon1}
          resizeMode="cover"
          source={require("../assets/redeem1.png")}
        />
        <Text style={[styles.pointsBalanceAt, styles.text5Typo]}>Rewards</Text>
      </View>
      <View style={styles.numberCheckpointParent}>
        <View style={styles.numberLayout}>
          <Text style={[styles.text, styles.textFlexBox]}>50</Text>
        </View>
        <View style={[styles.numberCheckpoint1, styles.numberLayout]}>
          <Text style={[styles.text, styles.textFlexBox]}>100</Text>
        </View>
        <View style={[styles.numberCheckpoint1, styles.numberLayout]}>
          <Text style={[styles.text, styles.textFlexBox]}>175</Text>
        </View>
        <View style={[styles.numberCheckpoint1, styles.numberLayout]}>
          <Text style={[styles.text, styles.textFlexBox]}>250</Text>
        </View>
        <View style={[styles.numberCheckpoint1, styles.numberLayout]}>
          <Text style={[styles.text, styles.textFlexBox]}>400</Text>
        </View>
      </View>
      <Text style={[styles.text5, styles.text5Typo]}>75</Text>
      <View style={[styles.storeLogoParent, styles.textFlexBox]}>
        <Image
          style={styles.storeLogoIcon}
          resizeMode="cover"
          source={require("../assets/storelogo5.png")}
        />
        <View style={styles.hebHancockCenterParent}>
          <Text style={[styles.hebHancockCenter, styles.rewards2Typo]}>
            HEB Hancock Center
          </Text>
          <View style={styles.e41stStAustinTx78751Wrapper}>
            <Text style={styles.e41stSt}>1000 E 41st St, Austin, TX 78751</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.arrowBack, styles.arrowBackLayout]}
        onPress={() => navigation.navigate("FindAStore02")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-back2.png")}
        />
      </Pressable>
      <View style={[styles.pointsRewardsProgress, styles.rnpprogressbarLayout]}>
        <RNPProgressBar
          style={[styles.rnpprogressbar, styles.rnpprogressbarLayout]}
          progress={0.24}
          color="#55b2a5"
        />
      </View>
      <Image
        style={[styles.checkpointIcon, styles.checkpointIconPosition]}
        resizeMode="cover"
        source={require("../assets/checkpoint1.png")}
      />
      <View style={styles.rewards1}>
        <RewardsContainer pointsText="50 PTS" />
        <RewardsContainer pointsText="100 PTS" propLeft={155} />
        <RewardsContainer pointsText="175 PTS" propLeft={310} />
        <RewardsContainer pointsText="250 PTS" propLeft={465} />
        <RewardsContainer pointsText="400 PTS" propLeft={620} />
      </View>
      <Text style={[styles.rewards2, styles.rewards2Typo]}>Rewards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rnpprogressbar: {
    height: 10,
  },
  arrowBackLayout: {
    height: 24,
    width: 24,
  },
  parentPosition: {
    padding: Padding.p_3xs,
    left: 30,
    flexDirection: "row",
    position: "absolute",
  },
  text5Typo: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
  },
  textFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  numberLayout: {
    height: 14,
    width: 30,
  },
  rewards2Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
  },
  rnpprogressbarLayout: {
    width: 336,
    height: 10,
  },
  checkpointIconPosition: {
    top: 297,
    position: "absolute",
  },
  popUp: {
    top: 102,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    width: 390,
    height: 678,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  navBar: {
    top: 780,
    right: 0,
    borderColor: "#e8e8e8",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    height: 64,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  autoAwesomeIcon1: {
    width: 15,
    height: 15,
  },
  pointsBalanceAt: {
    marginLeft: 10,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_3xs,
  },
  autoAwesomeParent: {
    top: 220,
  },
  redeemParent: {
    top: 354,
  },
  text: {
    top: "0%",
    left: "0%",
    color: Color.gray_200,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    width: "100%",
  },
  numberCheckpoint1: {
    marginLeft: 43,
  },
  numberCheckpointParent: {
    top: 312,
    left: 57,
    flexDirection: "row",
    position: "absolute",
  },
  text5: {
    top: 244,
    left: 58,
    fontSize: FontSize.size_16xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  storeLogoIcon: {
    width: 52,
    height: 52,
  },
  hebHancockCenter: {
    fontSize: FontSize.size_mini,
    color: Color.black,
  },
  e41stSt: {
    fontWeight: "300",
    fontFamily: FontFamily.montserrat,
    color: Color.gray_400,
    width: 141,
    height: 11,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  e41stStAustinTx78751Wrapper: {
    marginTop: 1,
  },
  hebHancockCenterParent: {
    marginLeft: 15,
  },
  storeLogoParent: {
    top: 123,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.gray_100,
    borderColor: "#e0e0e0",
    borderWidth: 0.8,
    width: 330,
    paddingHorizontal: Padding.p_35xl,
    paddingVertical: Padding.p_sm,
    left: 30,
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
  },
  arrowBack: {
    left: 23,
    top: 58,
    position: "absolute",
  },
  pointsRewardsProgress: {
    height: 10,
    top: 297,
    position: "absolute",
    left: 30,
  },
  checkpointIcon: {
    left: 67,
    width: 10,
    height: 10,
  },
  rewards1: {
    top: 394,
    width: 349,
    height: 88,
    left: 30,
    position: "absolute",
  },
  rewards2: {
    top: 51,
    left: 65,
    fontSize: FontSize.size_6xl,
    color: Color.white,
    position: "absolute",
  },
  storeRewards: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default StoreRewards;
