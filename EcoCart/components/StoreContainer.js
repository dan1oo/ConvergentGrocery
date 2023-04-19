import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const StoreContainer = ({ propTop }) => {
  const storeDetailsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.storeDetails, storeDetailsStyle]}>
      <View style={styles.frameParent}>
        <View style={styles.locationOnParent}>
          <Image
            style={styles.locationOnIcon}
            resizeMode="cover"
            source={require("../assets/location-on2.png")}
          />
          <Text style={styles.hebHancockCenter}>HEB Hancock Center</Text>
        </View>
        <View style={styles.e41stStAustinTx78751Wrapper}>
          <Text style={styles.e41stSt}>1000 E 41st St, Austin, TX 78751</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationOnIcon: {
    width: 15,
    height: 15,
  },
  hebHancockCenter: {
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    fontFamily: FontFamily.lexendSemibold,
    color: Color.black,
    marginLeft: 4,
    textAlign: "left",
  },
  locationOnParent: {
    width: 169,
    flexDirection: "row",
  },
  e41stSt: {
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.montserrat,
    color: Color.gray_400,
    width: 141,
    height: 11,
    textAlign: "left",
  },
  e41stStAustinTx78751Wrapper: {
    paddingLeft: Padding.p_2xs,
    marginTop: 3,
  },
  frameParent: {
    alignItems: "center",
  },
  storeDetails: {
    position: "absolute",
    top: 122,
    left: 28,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#ececec",
    borderWidth: 1,
    width: 334,
    padding: Padding.p_3xs,
    alignItems: "center",
  },
});

export default StoreContainer;
