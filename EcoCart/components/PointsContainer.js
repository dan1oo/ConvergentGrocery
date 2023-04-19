import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ProgressBar as RNPProgressBar } from "react-native-paper";

const PointsContainer = () => {
  return (
    <View style={[styles.points, styles.pointsLayout]}>
      <RNPProgressBar
        style={styles.pointsLayout}
        progress={0.13}
        color="#d1b385"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rnpprogressbar: {
    width: 330,
    height: 132,
  },
  pointsLayout: {
    height: 132,
    width: 330,
  },
  points: {
    position: "absolute",
    top: 712,
    left: 35,
  },
});

export default PointsContainer;
