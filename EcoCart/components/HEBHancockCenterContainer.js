import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const HEBHancockCenterContainer = () => {
  return (
    <Pressable style={styles.storeLogoParent}>
      <Image
        style={styles.storeLogoIcon}
        resizeMode="cover"
        source={require("../assets/storelogo5.png")}
      />
      <View style={styles.hebHancockCenterParent}>
        <Text style={styles.hebHancockCenter}>HEB Hancock Center</Text>
        <View style={styles.e41stStAustinTx78751Wrapper}>
          <Text style={[styles.e41stSt, styles.e41stStTypo]}>
            1000 E 41st St, Austin, TX 78751
          </Text>
        </View>
      </View>
      <Pressable style={styles.selectSotre}>
        <Text style={[styles.selectStore, styles.e41stStTypo]}>
          Select Store
        </Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  e41stStTypo: {
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  storeLogoIcon: {
    width: 52,
    height: 52,
  },
  hebHancockCenter: {
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    color: Color.black,
  },
  e41stSt: {
    fontWeight: "300",
    fontFamily: FontFamily.montserrat,
    color: Color.gray_400,
    width: 141,
    height: 11,
  },
  e41stStAustinTx78751Wrapper: {
    marginTop: 1,
  },
  hebHancockCenterParent: {
    marginLeft: 15,
  },
  selectStore: {
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
    color: Color.black,
  },
  selectSotre: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    marginLeft: 15,
    flexDirection: "row",
  },
  storeLogoParent: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderWidth: 0.8,
    width: 330,
    paddingHorizontal: Padding.p_35xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default HEBHancockCenterContainer;
