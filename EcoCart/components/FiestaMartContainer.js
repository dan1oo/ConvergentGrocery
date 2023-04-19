import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FiestaMartContainer = ({
  storeLogo,
  hEB,
  propWidth,
  propPaddingLeft,
  propWidth1,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("paddingLeft", propPaddingLeft),
    };
  }, [propPaddingLeft]);

  const hEB1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  return (
    <View>
      <View style={[styles.storeLogoParent, frameView2Style]}>
        <Image
          style={styles.storeLogoIcon}
          resizeMode="cover"
          source={storeLogo}
        />
        <Text style={[styles.heb, hEB1Style]}>{hEB}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  storeLogoIcon: {
    width: 32,
    height: 32,
  },
  heb: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    textAlign: "left",
    display: "flex",
    width: 147,
    marginLeft: 10,
    alignItems: "center",
  },
  storeLogoParent: {
    borderRadius: Border.br_3xs,
    width: 330,
    height: 47,
    flexDirection: "row",
    paddingLeft: Padding.p_9xl,
    paddingTop: Padding.p_mini,
    paddingRight: Padding.p_97xl,
    paddingBottom: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiestaMartContainer;
