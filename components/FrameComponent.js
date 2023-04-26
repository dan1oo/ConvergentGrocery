import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import HEBHancockCenterContainer from "./HEBHancockCenterContainer";

const FrameComponent = () => {
  return (
    <ScrollView
      style={styles.findAStore02Inner}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.frameScrollViewContent}
    >
      <HEBHancockCenterContainer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 22,
  },
  findAStore02Inner: {
    position: "absolute",
    top: 570,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    overflow: "hidden",
    flex: 1,
  },
});

export default FrameComponent;
