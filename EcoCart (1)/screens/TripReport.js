import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { ProgressBar as RNPProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import PointsContainer from "../components/PointsContainer";
import StoreContainer from "../components/StoreContainer";
import EcoCartContainer from "../components/EcoCartContainer";
import CartItems from "../components/CartItems";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const TripReport = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tripReport}>
      <View style={[styles.tripReportChild, styles.vectorIconPosition]} />
      <View style={styles.section} />
      <PointsContainer />
      <View style={[styles.tripReportItem, styles.tripPosition]} />
      <View style={[styles.tripReportInner, styles.sustainable1ShadowBox]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector-3.png")}
      />
      <View style={[styles.scoreMeter, styles.scoreMeterLayout]}>
        <RNPProgressBar style={styles.scoreMeterLayout} progress={1} />
      </View>
      <StoreContainer propTop={154} />
      <View style={styles.sustainable}>
        <Text
          style={styles.yourShoppingTrip}
        >{`Your shopping trip today is `}</Text>
        <View style={[styles.sustainable1, styles.sustainable1ShadowBox]}>
          <Text style={styles.sustainable2}>Sustainable!</Text>
        </View>
      </View>
      <Text style={styles.april5th2023}>April 5th, 2023</Text>
      <Text style={[styles.cartItems5, styles.totalTypo]}>Cart Items (5)</Text>
      <Text style={[styles.total, styles.totalTypo]}>{`TOTAL: `}</Text>
      <Text
        style={[styles.cumulativeSustainabilityScor, styles.discountEarnedTypo]}
      >{`Cumulative Sustainability Score: `}</Text>
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
      <Text style={styles.tripReport1}>Trip Report</Text>
      <View style={styles.frameView}>
        <View>
          <Text style={[styles.discountEarned, styles.discountEarnedTypo]}>
            Discount Earned
          </Text>
        </View>
      </View>
      <View style={styles.rectangleView} />
      <View style={[styles.lineView, styles.navBarPosition]} />
      <CartItems />
      <View style={[styles.navBar, styles.navBarPosition]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/location-on1.png")}
        />
        <Image
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/shopping-cart1.png")}
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
  rnpprogressbar1: {
    width: 105,
    height: 103,
  },
  vectorIconPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  tripPosition: {
    width: 334,
    left: 28,
    backgroundColor: Color.white,
    position: "absolute",
  },
  sustainable1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  scoreMeterLayout: {
    height: 103,
    width: 105,
  },
  totalTypo: {
    color: Color.black,
    fontFamily: FontFamily.lexendRegular,
    textAlign: "left",
    position: "absolute",
  },
  discountEarnedTypo: {
    fontFamily: FontFamily.lexendRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  navBarPosition: {
    borderTopWidth: 0.5,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  tripReportChild: {
    top: 1329,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderColor: "#eaeaea",
    borderWidth: 1,
    height: 111,
    borderStyle: "solid",
    width: 390,
    backgroundColor: Color.white,
  },
  section: {
    top: 371,
    left: -1,
    backgroundColor: "#64847f",
    width: 391,
    height: 310,
    position: "absolute",
  },
  tripReportItem: {
    top: 486,
    borderRadius: Border.br_xl,
    height: 158,
  },
  tripReportInner: {
    top: 229,
    borderRadius: Border.br_6xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 10,
    elevation: 10,
    height: 287,
    width: 334,
    left: 28,
    backgroundColor: Color.white,
    position: "absolute",
  },
  vectorIcon: {
    top: 259,
    height: 381,
    display: "none",
  },
  scoreMeter: {
    top: 301,
    left: 139,
    position: "absolute",
  },
  yourShoppingTrip: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    color: Color.gray_300,
    fontSize: FontSize.size_3xs,
  },
  sustainable2: {
    fontFamily: FontFamily.poppinsRegular,
    color: "#265b54",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  sustainable1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightcyan,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 6,
    elevation: 6,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    marginTop: 12,
    flexDirection: "row",
  },
  sustainable: {
    top: 434,
    left: 126,
    alignItems: "center",
    position: "absolute",
  },
  april5th2023: {
    top: 120,
    left: 156,
    fontWeight: "300",
    fontFamily: FontFamily.lexendLight,
    color: Color.gray_500,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  cartItems5: {
    top: 875,
    left: 30,
    fontSize: FontSize.size_smi,
  },
  total: {
    top: 1354,
    left: 34,
    fontSize: 18,
  },
  cumulativeSustainabilityScor: {
    top: 258,
    left: 93,
    color: Color.gray_300,
    position: "absolute",
  },
  tripReport1: {
    top: 52,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    left: 30,
    textAlign: "center",
    position: "absolute",
  },
  discountEarned: {
    color: Color.white,
  },
  frameView: {
    top: 533,
    left: 60,
    flexDirection: "row",
    position: "absolute",
  },
  rectangleView: {
    top: 566,
    left: 77,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gainsboro_300,
    width: 240,
    height: 49,
    position: "absolute",
  },
  lineView: {
    top: 899,
    borderColor: "#a7a7a7",
    width: 331,
    height: 1,
    left: 30,
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  navBar: {
    right: 0,
    bottom: 0,
    borderColor: "#e8e8e8",
    borderBottomWidth: 0.5,
    height: 64,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    left: 0,
    borderTopWidth: 0.5,
  },
  tripReport: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 1504,
    overflow: "hidden",
    width: "100%",
  },
});

export default TripReport;
