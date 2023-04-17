import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import ContainerBox from "./ContainerBox";
import ContainerWrapper from "./ContainerWrapper";
import FrameComponent3 from "./FrameComponent3";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PreviousTripsContainer = ({
  frame35Top,
  onStoreDetailsPress,
  onStoreDetailsPress1,
  onStoreDetailsPress2,
  onStoreDetailsPress3,
  onStoreDetailsPress4,
}) => {
  const previousTripsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", frame35Top),
    };
  }, [frame35Top]);

  return (
    <View style={[styles.previousTrips, previousTripsStyle]}>
      <View>
        <Text style={styles.apr52023}>APR 5 2023</Text>
        <Pressable style={styles.storeDetails} onPress={onStoreDetailsPress}>
          <View style={styles.frameParent}>
            <View style={styles.storeLogoParent}>
              <Image
                style={styles.storeLogoIcon}
                resizeMode="cover"
                source={require("../assets/storelogo3.png")}
              />
              <View style={styles.frameWrapper}>
                <View style={styles.hebHancockCenterParent}>
                  <Text style={[styles.hebHancockCenter, styles.textClr]}>
                    HEB Hancock Center
                  </Text>
                  <Text style={styles.e41stSt}>
                    1000 E 41st St, Austin, TX 78751
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.scoreMeter, styles.scoreMeterLayout]}>
              <Image
                style={[styles.whiteCircleIcon, styles.textPosition]}
                resizeMode="cover"
                source={require("../assets/whitecircle.png")}
              />
              <Image
                style={styles.meterIcon}
                resizeMode="cover"
                source={require("../assets/meter.png")}
              />
              <View style={[styles.score, styles.textLayout]}>
                <Text style={[styles.text, styles.textLayout]}>8</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
      <ContainerBox />
      <ContainerWrapper />
      <FrameComponent3 />
    </View>
  );
};

const styles = StyleSheet.create({
  textClr: {
    color: Color.black,
    fontSize: FontSize.size_3xs,
  },
  scoreMeterLayout: {
    height: 30,
    width: 30,
  },
  textPosition: {
    left: 0,
    top: 0,
  },
  textLayout: {
    width: 29,
    position: "absolute",
  },
  apr52023: {
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.silver_100,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  storeLogoIcon: {
    width: 24,
    height: 24,
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
  storeLogoParent: {
    flexDirection: "row",
  },
  whiteCircleIcon: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  meterIcon: {
    top: -11,
    left: -15,
    width: 61,
    height: 61,
    position: "absolute",
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
    height: 15,
  },
  scoreMeter: {
    marginLeft: 74,
  },
  frameParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  storeDetails: {
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#ececec",
    borderWidth: 1,
    width: 334,
    padding: Padding.p_3xs,
    marginTop: 4,
    borderRadius: Border.br_8xs,
  },
  previousTrips: {
    top: 160,
    left: 30,
    height: 562,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
});

export default PreviousTripsContainer;
