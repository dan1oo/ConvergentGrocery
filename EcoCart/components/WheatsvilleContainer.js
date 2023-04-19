import React, { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const WheatsvilleContainer = ({
  wheatsville,
  pTS,
  propRight,
  propLeft,
  propBackgroundColor,
  propLeft1,
}) => {
  const centralMarketStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propRight, propLeft]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const storePointsStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <Pressable
      style={[styles.centralMarket, styles.centralPosition, centralMarketStyle]}
    >
      <View
        style={[
          styles.centralMarketChild,
          styles.centralPosition,
          rectangleView1Style,
        ]}
      />
      <Image
        style={styles.centralMarketIcon}
        resizeMode="cover"
        source={wheatsville}
      />
      <View style={[styles.storePoints, storePointsStyle]}>
        <Image
          style={styles.autoAwesomeIcon}
          resizeMode="cover"
          source={require("../assets/auto-awesome2.png")}
        />
        <Text style={styles.pts}>{pTS}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  centralPosition: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  centralMarketChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.seagreen_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  centralMarketIcon: {
    height: "66.67%",
    width: "66.67%",
    top: "16.67%",
    right: "16.67%",
    bottom: "16.67%",
    left: "16.67%",
    borderRadius: Border.br_81xl,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  autoAwesomeIcon: {
    width: 15,
    height: 15,
  },
  pts: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.4,
    fontFamily: FontFamily.leagueGothicRegular,
    color: Color.white,
    textAlign: "left",
    width: 45,
    marginLeft: 4,
  },
  storePoints: {
    top: 125,
    left: 83,
    width: 64,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  centralMarket: {
    height: "46.88%",
    width: "44.91%",
    top: "53.13%",
    left: "55.09%",
  },
});

export default WheatsvilleContainer;
