import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const GroceryContainer = ({
  screenshot20230406At6261,
  freshRedBellPepper,
  ea,
  prop,
  propWidth,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.frameParent, frameViewStyle]}>
      <View style={styles.screenshot20230406At626Wrapper}>
        <Image
          style={styles.screenshot20230406At626}
          resizeMode="cover"
          source={screenshot20230406At6261}
        />
      </View>
      <View style={styles.freshRedBellPepperParent}>
        <Text style={[styles.freshRedBell, styles.eaFlexBox]}>
          {freshRedBellPepper}
        </Text>
        <View style={styles.eaWrapper}>
          <Text style={[styles.ea, styles.eaFlexBox]}>{ea}</Text>
        </View>
        <Text style={[styles.text, styles.eaFlexBox]}>{prop}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eaFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  screenshot20230406At626: {
    width: 47,
    height: 55,
  },
  screenshot20230406At626Wrapper: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_10xs,
    flexDirection: "row",
  },
  freshRedBell: {
    fontFamily: FontFamily.lexendRegular,
    width: 191,
    fontSize: FontSize.size_smi,
    color: Color.black,
  },
  ea: {
    fontSize: FontSize.size_5xs,
    fontWeight: "300",
    fontFamily: FontFamily.lexendLight,
  },
  eaWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke_200,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_11xs,
    marginTop: 6,
    flexDirection: "row",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.lexendSemibold,
    marginTop: 6,
    fontSize: FontSize.size_smi,
    color: Color.black,
  },
  freshRedBellPepperParent: {
    marginLeft: 10,
  },
  frameParent: {
    position: "absolute",
    top: 11,
    left: 17,
    width: 242,
    alignItems: "flex-end",
    flexDirection: "row",
  },
});

export default GroceryContainer;
