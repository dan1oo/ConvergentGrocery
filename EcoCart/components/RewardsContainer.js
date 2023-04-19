import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const RewardsContainer = ({ pointsText, propLeft }) => {
  const rewardsOffer01Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.rewardsOffer01, rewardsOffer01Style]}>
      <View
        style={[styles.rewardsOffer01Child, styles.numberCheckpointPosition]}
      />
      <View style={[styles.numberCheckpoint, styles.numberCheckpointPosition]}>
        <Text style={styles.pts}>{pointsText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  numberCheckpointPosition: {
    right: "0%",
    position: "absolute",
  },
  rewardsOffer01Child: {
    height: "100%",
    width: "100%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gainsboro_300,
    top: "0%",
  },
  pts: {
    width: "88.14%",
    left: "5.08%",
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
    color: Color.gray_200,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    top: "0%",
    position: "absolute",
  },
  numberCheckpoint: {
    height: "15.91%",
    width: "39.29%",
    top: "78.41%",
    bottom: "5.68%",
    left: "60.71%",
  },
  rewardsOffer01: {
    top: 0,
    left: 0,
    width: 140,
    height: 88,
    position: "absolute",
  },
});

export default RewardsContainer;
