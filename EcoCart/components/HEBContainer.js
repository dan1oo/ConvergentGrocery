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

const HEBContainer = ({
  hEB,
  pTS,
  propRight,
  propLeft,
  propBackgroundColor,
  onHEBPress,
}) => {
  const hEBStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propRight, propLeft]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <Pressable
      style={[styles.heb, styles.hebPosition, hEBStyle]}
      onPress={onHEBPress}
    >
      <View style={[styles.hebChild, styles.hebPosition, rectangleViewStyle]} />
      <Image style={styles.hebIcon} resizeMode="cover" source={hEB} />
      <View style={styles.storePoints}>
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
  hebPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  hebChild: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.red,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  hebIcon: {
    height: "66.67%",
    width: "66.67%",
    top: "16.67%",
    right: "16.67%",
    bottom: "16.67%",
    left: "16.67%",
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
    left: 86,
    width: 64,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  heb: {
    height: "46.88%",
    width: "44.91%",
    right: "55.09%",
    bottom: "53.13%",
  },
});

export default HEBContainer;
