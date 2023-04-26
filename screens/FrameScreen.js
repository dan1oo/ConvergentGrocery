import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FrameScreen = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>8</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.black,
    textAlign: "center",
  },
  parent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.paleturquoise,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
  },
});

export default FrameScreen;
