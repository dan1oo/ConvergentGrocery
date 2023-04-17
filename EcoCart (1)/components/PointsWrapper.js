import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PointsWrapper = () => {
  return (
    <View style={styles.points}>
      <View style={[styles.autoAwesomeParent, styles.parentFlexBox]}>
        <Image
          style={styles.autoAwesomeIcon}
          resizeMode="cover"
          source={require("../assets/auto-awesome6.png")}
        />
        <Text
          style={[styles.pointsBalanceAt, styles.text5Typo]}
        >{`Points Balance at HEB: `}</Text>
      </View>
      <View style={[styles.numberCheckpointParent, styles.parentFlexBox]}>
        <View style={styles.numberLayout}>
          <Text style={styles.text}>50</Text>
        </View>
        <View style={[styles.numberCheckpoint1, styles.numberLayout]}>
          <Text style={styles.text}>100</Text>
        </View>
        <View style={[styles.numberCheckpoint1, styles.numberLayout]}>
          <Text style={styles.text}>175</Text>
        </View>
        <View style={[styles.numberCheckpoint1, styles.numberLayout]}>
          <Text style={styles.text}>250</Text>
        </View>
        <View style={[styles.numberCheckpoint1, styles.numberLayout]}>
          <Text style={styles.text}>400</Text>
        </View>
      </View>
      <Text style={[styles.text5, styles.text5Typo]}>75</Text>
      <Image
        style={[styles.pointsRewardsProgress, styles.checkpointIconPosition]}
        resizeMode="cover"
        source={require("../assets/points-rewards-progress1.png")}
      />
      <Image
        style={[styles.checkpointIcon, styles.checkpointIconPosition]}
        resizeMode="cover"
        source={require("../assets/checkpoint1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  text5Typo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
  },
  numberLayout: {
    height: 14,
    width: 30,
  },
  checkpointIconPosition: {
    height: 10,
    top: 77,
    position: "absolute",
  },
  autoAwesomeIcon: {
    width: 15,
    height: 15,
  },
  pointsBalanceAt: {
    marginLeft: 10,
    fontSize: FontSize.size_3xs,
    color: Color.black,
  },
  autoAwesomeParent: {
    top: 0,
    left: 0,
    padding: Padding.p_3xs,
  },
  text: {
    width: "100%",
    top: "0%",
    left: "0%",
    color: Color.gray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  numberCheckpoint1: {
    marginLeft: 43,
  },
  numberCheckpointParent: {
    top: 96,
    left: 27,
  },
  text5: {
    top: 24,
    left: 28,
    fontSize: FontSize.size_16xl,
    position: "absolute",
  },
  pointsRewardsProgress: {
    left: 2,
    width: 338,
  },
  checkpointIcon: {
    left: 37,
    width: 10,
  },
  points: {
    top: 683,
    left: 30,
    width: 349,
    height: 110,
    position: "absolute",
  },
});

export default PointsWrapper;
