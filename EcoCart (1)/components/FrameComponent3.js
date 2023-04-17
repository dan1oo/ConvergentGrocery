import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const FrameComponent3 = () => {
  return (
    <View style={styles.mar152023Parent}>
      <Text style={styles.mar152023}>MAR 15 2023</Text>
      <View style={[styles.storeDetailsWrapper, styles.storeLayout]}>
        <View
          style={[styles.storeDetails, styles.textPosition]}
          onPress={onStoreDetailsPress4}
        >
          <View style={styles.frameParent}>
            <View style={styles.centralMarketParent}>
              <Image
                style={styles.centralMarketIcon}
                resizeMode="cover"
                source={require("../assets/central-market1.png")}
              />
              <View style={styles.frameWrapper}>
                <View style={styles.hebHancockCenterParent}>
                  <Text style={[styles.hebHancockCenter, styles.textClr]}>
                    Central Market
                  </Text>
                  <Text style={styles.e41stSt}>
                    Wheatsville Food Co-op525 N Lamar Blvd, Austin, TX 78703
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.scoreMeter, styles.scoreMeterLayout]}>
              <Image
                style={[styles.whiteCircleIcon, styles.scoreMeterLayout]}
                resizeMode="cover"
                source={require("../assets/whitecircle3.png")}
              />
              <Image
                style={styles.meterIcon}
                resizeMode="cover"
                source={require("../assets/meter4.png")}
              />
              <View style={[styles.score, styles.textLayout]}>
                <Text style={[styles.text, styles.textLayout]}>6</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  storeLayout: {
    height: 59,
    width: 334,
  },
  textPosition: {
    left: 0,
    top: 0,
  },
  textClr: {
    color: Color.black,
    fontSize: FontSize.size_3xs,
  },
  scoreMeterLayout: {
    height: 30,
    width: 30,
  },
  textLayout: {
    height: 15,
    width: 29,
    position: "absolute",
  },
  mar152023: {
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.silver_100,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  centralMarketIcon: {
    borderRadius: Border.br_81xl,
    width: 20,
    height: 20,
  },
  hebHancockCenter: {
    fontWeight: "600",
    fontFamily: FontFamily.lexendSemibold,
    textAlign: "left",
  },
  e41stSt: {
    fontSize: FontSize.size_5xs,
    fontWeight: "300",
    fontFamily: FontFamily.montserrat,
    color: Color.gray_400,
    width: 141,
    height: 11,
    marginTop: 4,
    textAlign: "left",
  },
  hebHancockCenterParent: {
    width: 169,
  },
  frameWrapper: {
    marginLeft: 10,
    alignItems: "center",
  },
  centralMarketParent: {
    flexDirection: "row",
  },
  whiteCircleIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  meterIcon: {
    top: -11,
    left: -15,
    width: 54,
    height: 61,
    position: "absolute",
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    top: 0,
  },
  score: {
    top: 8,
    left: 1,
  },
  scoreMeter: {
    marginLeft: 75,
  },
  frameParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  storeDetails: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#ececec",
    borderWidth: 1,
    padding: Padding.p_3xs,
    position: "absolute",
    height: 59,
    width: 334,
  },
  storeDetailsWrapper: {
    marginTop: 4,
  },
  mar152023Parent: {
    marginTop: 23,
  },
});

export default FrameComponent3;
