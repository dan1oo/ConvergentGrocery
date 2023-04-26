import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WheatsvilleContainer from "./WheatsvilleContainer";
import HEBContainer from "./HEBContainer";

const StoreRewardsContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.stores}>
      <WheatsvilleContainer
        wheatsville={require("../assets/wheatsville2.png")}
        pTS="57 PTS"
        propRight="54.79%"
        propLeft="0.3%"
        propBackgroundColor="#91298f"
        propLeft1={86}
      />
      <HEBContainer
        hEB={require("../assets/heb9.png")}
        pTS="75 PTS"
        onHEBPress={() => navigation.navigate("StoreRewards")}
      />
      <HEBContainer
        hEB={require("../assets/heb10.png")}
        pTS="13 PTS"
        propRight="0.6%"
        propLeft="54.49%"
        propBackgroundColor="#006f46"
      />
      <WheatsvilleContainer
        wheatsville={require("../assets/central-market2.png")}
        pTS="29 PTS"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stores: {
    position: "absolute",
    height: "37.91%",
    width: "85.64%",
    top: "20.62%",
    right: "6.67%",
    bottom: "41.47%",
    left: "7.69%",
  },
});

export default StoreRewardsContainer;
