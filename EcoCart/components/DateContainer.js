import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const DateContainer = ({ dateText }) => {
  return (
    <View style={styles.marXx2023Parent}>
      <Text style={styles.marXx2023}>{dateText}</Text>
      <View style={styles.groupWrapper}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 56,
    width: 337,
  },
  marXx2023: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    color: Color.silver_100,
    textAlign: "left",
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gainsboro_300,
  },
  groupWrapper: {
    marginTop: 4,
    height: 56,
    width: 337,
  },
  marXx2023Parent: {
    marginTop: 23,
  },
});

export default DateContainer;
