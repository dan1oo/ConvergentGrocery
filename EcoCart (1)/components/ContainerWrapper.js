import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ContainerWrapper = () => {
  return (
    <View style={styles.mar222023Parent}>
      <Text style={styles.mar222023}>MAR 22 2023</Text>
      <View style={styles.storeDetailsParent}>
        <View
          style={[styles.storeDetails, styles.textPosition]}
          onPress={onStoreDetailsPress3}
        />
        <View style={styles.frameParent}>
          <View style={styles.frameWrapper}>
            <View style={styles.wheatsvilleParent}>
              <Image
                style={styles.wheatsvilleIcon}
                resizeMode="cover"
                source={require("../assets/wheatsville3.png")}
              />
              <View style={styles.frameContainer}>
                <View style={styles.hebHancockCenterParent}>
                  <Text style={[styles.hebHancockCenter, styles.textClr]}>
                    Wheatsville Food Co-op
                  </Text>
                  <Text style={styles.e41stSt}>
                    525 N Lamar Blvd, Austin, TX 78703
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.scoreMeter, styles.scoreMeterLayout]}>
            <Image
              style={[styles.whiteCircleIcon, styles.scoreMeterLayout]}
              resizeMode="cover"
              source={require("../assets/whitecircle2.png")}
            />
            <Image
              style={styles.meterIcon}
              resizeMode="cover"
              source={require("../assets/meter3.png")}
            />
            <View style={[styles.score, styles.textLayout]}>
              <Text style={[styles.text, styles.textLayout]}>6</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  mar222023: {
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.silver_100,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  storeDetails: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#ececec",
    borderWidth: 1,
    position: "absolute",
    width: 334,
  },
  wheatsvilleIcon: {
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
  frameContainer: {
    marginLeft: 10,
    alignItems: "center",
  },
  wheatsvilleParent: {
    flexDirection: "row",
  },
  frameWrapper: {
    justifyContent: "center",
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
    left: 1,
    top: 8,
  },
  scoreMeter: {
    marginLeft: 75,
  },
  frameParent: {
    left: 10,
    alignItems: "flex-end",
    flexDirection: "row",
    top: 8,
    position: "absolute",
  },
  storeDetailsParent: {
    height: 48,
    marginTop: 4,
    width: 334,
  },
  mar222023Parent: {
    marginTop: 23,
  },
});

export default ContainerWrapper;
