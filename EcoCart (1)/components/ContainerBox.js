import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ContainerBox = () => {
  return (
    <View style={styles.mar272023Parent}>
      <Text style={styles.mar272023}>MAR 27 2023</Text>
      <View style={styles.storeDetails} onPress={onStoreDetailsPress1}>
        <View style={styles.frameParent}>
          <View style={styles.frameWrapper}>
            <View style={styles.frameParent}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/heb2.png")}
              />
              <View style={styles.frameContainer}>
                <View style={styles.hebHancockCenterParent}>
                  <Text style={[styles.hebHancockCenter, styles.textClr]}>
                    Whole Foods
                  </Text>
                  <Text style={styles.e41stSt}>
                    525 N Lamar Blvd, Austin, TX 78703
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.scoreMeter}>
            <Image
              style={[styles.whiteCircleIcon, styles.textPosition]}
              resizeMode="cover"
              source={require("../assets/whitecircle1.png")}
            />
            <Image
              style={[styles.meterIcon, styles.meterIconPosition]}
              resizeMode="cover"
              source={require("../assets/meter1.png")}
            />
            <View style={[styles.score, styles.textLayout]}>
              <Text style={[styles.text, styles.textLayout]}>6</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.storeDetails} onPress={onStoreDetailsPress2}>
        <View style={styles.frameParent}>
          <View style={styles.frameWrapper}>
            <View style={styles.frameParent}>
              <Image
                style={[styles.wheatsvilleIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/wheatsville1.png")}
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
          <View style={styles.scoreMeter}>
            <Image
              style={[styles.whiteCircleIcon, styles.textPosition]}
              resizeMode="cover"
              source={require("../assets/whitecircle1.png")}
            />
            <Image
              style={[styles.meterIcon1, styles.meterIconPosition]}
              resizeMode="cover"
              source={require("../assets/meter2.png")}
            />
            <View style={[styles.score, styles.textLayout]}>
              <Text style={[styles.text, styles.textLayout]}>4</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textClr: {
    color: Color.black,
    fontSize: FontSize.size_3xs,
  },
  textPosition: {
    left: 0,
    top: 0,
  },
  meterIconPosition: {
    left: -15,
    top: -11,
    position: "absolute",
  },
  textLayout: {
    height: 15,
    width: 29,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  mar272023: {
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.silver_100,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
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
  frameParent: {
    flexDirection: "row",
  },
  frameWrapper: {
    justifyContent: "center",
    flexDirection: "row",
  },
  whiteCircleIcon: {
    position: "absolute",
    top: 0,
    height: 30,
    width: 30,
  },
  meterIcon: {
    width: 54,
    height: 61,
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    display: "flex",
    left: 0,
    top: 0,
    color: Color.black,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    top: 8,
    left: 1,
  },
  scoreMeter: {
    marginLeft: 75,
    height: 30,
    width: 30,
  },
  storeDetails: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#ececec",
    borderWidth: 1,
    width: 334,
    padding: Padding.p_3xs,
    marginTop: 4,
  },
  wheatsvilleIcon: {
    borderRadius: Border.br_81xl,
  },
  meterIcon1: {
    width: 48,
    height: 59,
  },
  mar272023Parent: {
    marginTop: 23,
  },
});

export default ContainerBox;
