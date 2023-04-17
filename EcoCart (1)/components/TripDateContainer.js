import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateContainer from "./DateContainer";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const TripDateContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.previousTrips}>
      <View>
        <Text style={styles.apr52023}>APR 5 2023</Text>
        <Pressable
          style={styles.storeDetails}
          onPress={() => navigation.navigate("TripReport")}
        >
          <View style={styles.frameParent}>
            <View style={styles.storeLogoParent}>
              <Image
                style={styles.storeLogoIcon}
                resizeMode="cover"
                source={require("../assets/storelogo4.png")}
              />
              <View style={styles.frameWrapper}>
                <View style={styles.hebHancockCenterParent}>
                  <Text style={styles.hebHancockCenter}>
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
                source={require("../assets/whitecircle11.png")}
              />
              <Image
                style={styles.meterIcon}
                resizeMode="cover"
                source={require("../assets/meter11.png")}
              />
              <View style={[styles.score, styles.textLayout]}>
                <Text style={[styles.text, styles.textTypo]}>8</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={styles.mar272023Parent}>
        <Text style={styles.apr52023}>MAR 27 2023</Text>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <View style={[styles.rectangleWrapper, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.textTypo}>8</Text>
          </View>
        </View>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <View style={[styles.rectangleWrapper, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </View>
        </View>
      </View>
      <DateContainer dateText="MAR XX 2023" />
      <DateContainer dateText="MAR XX 2023" />
      <DateContainer dateText="JAN XX 2023" />
      <DateContainer dateText="JAN XX 2023" />
    </View>
  );
};

const styles = StyleSheet.create({
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
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.black,
    fontSize: FontSize.size_3xs,
  },
  groupLayout: {
    height: 56,
    width: 337,
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
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
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
    display: "flex",
    width: 29,
    position: "absolute",
    left: 0,
    top: 0,
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
  groupChild: {
    backgroundColor: Color.gainsboro_300,
    left: 0,
    top: 0,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapper: {
    top: 21,
    left: 287,
    borderRadius: Border.br_xl,
    backgroundColor: Color.paleturquoise,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    position: "absolute",
  },
  groupParent: {
    marginTop: 4,
  },
  mar272023Parent: {
    marginTop: 23,
  },
  previousTrips: {
    top: 179,
    left: 30,
    height: 562,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
});

export default TripDateContainer;
