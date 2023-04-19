import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const EcoCartContainer = ({
  productIds,
  productDimensions,
  propRight,
  propWidth,
  propRight1,
  propWidth1,
  propDisplay,
  propDisplay1,
  propRight2,
  propWidth2,
  onAccountCirclePress,
}) => {
  const topStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("width", propWidth),
    };
  }, [propRight, propWidth]);

  const headingStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight1),
      ...getStyleValue("width", propWidth1),
    };
  }, [propRight1, propWidth1]);

  const greenBackgroundStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
    };
  }, [propDisplay]);

  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay1),
    };
  }, [propDisplay1]);

  const phoneDetailsStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight2),
      ...getStyleValue("width", propWidth2),
    };
  }, [propRight2, propWidth2]);

  return (
    <View style={[styles.top, topStyle]}>
      <View style={[styles.top, headingStyle]}>
        <View
          style={[
            styles.greenBackground,
            styles.iconLayout1,
            greenBackgroundStyle,
          ]}
        />
        <View style={styles.ecocart}>
          <Image
            style={styles.ecocartIcon}
            resizeMode="cover"
            source={productIds}
          />
          <Text style={[styles.ecocart1, styles.textFlexBox]}>EcoCart</Text>
        </View>
        <Pressable style={styles.accountCircle} onPress={onAccountCirclePress}>
          <Image
            style={[styles.icon, styles.iconLayout1, iconStyle]}
            resizeMode="cover"
            source={productDimensions}
          />
        </Pressable>
      </View>
      <View style={[styles.phoneDetails, phoneDetailsStyle]}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textFlexBox]}>6:00</Text>
          <View style={styles.signalBattery}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/signal-cellular-alt.png")}
            />
            <Image
              style={[styles.wifiIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={[styles.wifiIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/battery-horiz-050.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    height: "100%",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  iconLayout: {
    width: 20,
    height: 20,
  },
  greenBackground: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.gray_700,
    position: "absolute",
  },
  ecocartIcon: {
    width: 46,
    height: 48,
    display: "none",
  },
  ecocart1: {
    fontSize: FontSize.size_6xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    marginLeft: 15,
  },
  ecocart: {
    height: "31.4%",
    width: "25.9%",
    top: "42.98%",
    right: "36.92%",
    bottom: "25.62%",
    left: "37.18%",
    justifyContent: "center",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  accountCircle: {
    left: "84.87%",
    top: "53.92%",
    right: "7.44%",
    bottom: "16.67%",
    width: "7.69%",
    height: "29.41%",
    position: "absolute",
  },
  top: {
    top: 0,
    right: 0,
    left: 0,
    height: 102,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  wifiIcon: {
    marginLeft: 9,
  },
  signalBattery: {
    marginLeft: 210,
    flexDirection: "row",
  },
  parent: {
    top: -2,
    left: 23,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  phoneDetails: {
    top: 16,
    right: 23,
    height: 20,
    left: 23,
    position: "absolute",
  },
});

export default EcoCartContainer;
