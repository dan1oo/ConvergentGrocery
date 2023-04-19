import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import IconContainer from "../components/IconContainer";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const Elements = () => {
  return (
    <View style={styles.elements}>
      <View style={[styles.r, styles.rPosition]} />
      <View style={[styles.length, styles.lengthLayout]} />
      <View style={[styles.colors, styles.fontsPosition]}>
        <View style={[styles.lightGray, styles.navBarFlexBox]}>
          <Text style={[styles.f8f8f8, styles.ptsTypo]}>F8F8F8</Text>
        </View>
        <View style={[styles.e3a8, styles.cef7fSpaceBlock]}>
          <Text style={[styles.f8f8f8, styles.ptsTypo]}>98E3A8</Text>
        </View>
        <View style={[styles.b2a5, styles.cef7fSpaceBlock]}>
          <Text style={[styles.b2a51, styles.ptsTypo]}>55B2A5</Text>
        </View>
        <View style={[styles.cef7f0, styles.cef7fSpaceBlock]}>
          <Text style={[styles.f8f8f8, styles.ptsTypo]}>CEF7F0</Text>
        </View>
        <View style={[styles.cef7f02, styles.cef7fSpaceBlock]}>
          <Text style={[styles.b2a51, styles.ptsTypo]}>0E1D1B</Text>
        </View>
        <View style={[styles.cef7f03, styles.cef7fSpaceBlock]}>
          <Text style={[styles.b2a51, styles.ptsTypo]}>2D534E</Text>
        </View>
      </View>
      <View style={[styles.cef7f04, styles.cef7fFlexBox]}>
        <Text style={[styles.f8f8f8, styles.ptsTypo]}>FFCF87</Text>
      </View>
      <View style={[styles.cef7f05, styles.cef7fFlexBox]}>
        <Text style={[styles.f8f8f8, styles.ptsTypo]}>D1B385</Text>
      </View>
      <View style={[styles.fonts, styles.fontsPosition]}>
        <Text style={[styles.headerPoppins, styles.ptsTypo]}>
          Header - Poppins
        </Text>
        <Text style={[styles.titleLexend, styles.bodyOpenSpaceBlock]}>
          Title - Lexend
        </Text>
        <Text style={[styles.bodyOpen, styles.bodyOpenSpaceBlock]}>
          Body - Open Sans (Regular)
        </Text>
        <Text style={[styles.descriptionAvenir, styles.bodyOpenSpaceBlock]}>
          Description - Avenir (Light)
        </Text>
      </View>
      <IconContainer />
      <View style={styles.heb}>
        <View style={styles.hebChild} />
        <Image
          style={styles.hebIcon}
          resizeMode="cover"
          source={require("../assets/heb7.png")}
        />
        <View style={styles.storePoints}>
          <Image
            style={styles.autoAwesomeIcon}
            resizeMode="cover"
            source={require("../assets/auto-awesome2.png")}
          />
          <Text style={[styles.pts, styles.ptsTypo]}>75 PTS</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
        <View style={[styles.storesWrapper, styles.storesSpaceBlock]}>
          <Text style={styles.tripsTypo}>Stores</Text>
        </View>
        <Text style={[styles.trips, styles.tripsTypo]}>Trips</Text>
      </View>
      <View style={[styles.frameGroup, styles.storesSpaceBlock]}>
        <View style={[styles.storesContainer, styles.storesSpaceBlock]}>
          <Text style={styles.tripsTypo}>Stores</Text>
        </View>
        <View style={[styles.tripsWrapper, styles.frameParentSpaceBlock]}>
          <Text style={styles.tripsTypo}>Trips</Text>
        </View>
      </View>
      <View style={[styles.selectSotre, styles.selectSotreBorder]}>
        <View style={[styles.property1default, styles.selectSotre1SpaceBlock]}>
          <Text style={[styles.selectStore, styles.storeTypo]}>
            Select Store
          </Text>
        </View>
        <View
          style={[styles.property1default1, styles.property1defaultPosition]}
        >
          <View style={[styles.selectSotre1, styles.selectSotre1SpaceBlock]}>
            <Text style={[styles.selectStore1, styles.storeTypo]}>
              Select Store
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.findStore}>
        <Image
          style={[styles.locationOnIcon, styles.locationIconLayout]}
          resizeMode="cover"
          source={require("../assets/location-on3.png")}
        />
        <Text style={[styles.findStore1, styles.storeTypo]}>
          <Text style={styles.findStore2}>{`Find Store
`}</Text>
          <Text style={styles.blankLine}> </Text>
        </Text>
      </View>
      <View style={[styles.navBarFixed, styles.navLayout]}>
        <View style={[styles.navBar, styles.navLayout]}>
          <Image
            style={styles.locationIconLayout}
            resizeMode="cover"
            source={require("../assets/location-on1.png")}
          />
          <Image
            style={[styles.shoppingCartIcon, styles.locationIconLayout]}
            resizeMode="cover"
            source={require("../assets/shopping-cart.png")}
          />
          <Image
            style={[styles.shoppingCartIcon, styles.locationIconLayout]}
            resizeMode="cover"
            source={require("../assets/barcode-scanner.png")}
          />
          <Image
            style={[styles.shoppingCartIcon, styles.locationIconLayout]}
            resizeMode="cover"
            source={require("../assets/article.png")}
          />
          <Image
            style={[styles.shoppingCartIcon, styles.locationIconLayout]}
            resizeMode="cover"
            source={require("../assets/auto-awesome.png")}
          />
        </View>
      </View>
      <View style={[styles.storeSelection, styles.navLayout]}>
        <Image
          style={[styles.property1selectIcon, styles.locationIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1select.png")}
        />
        <View style={[styles.property1circle, styles.property1defaultPosition]}>
          <Image
            style={styles.circleIcon}
            resizeMode="cover"
            source={require("../assets/circle.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rPosition: {
    left: 0,
    top: 0,
  },
  lengthLayout: {
    width: 390,
    backgroundColor: Color.white,
  },
  fontsPosition: {
    top: 37,
    position: "absolute",
  },
  navBarFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  ptsTypo: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  cef7fSpaceBlock: {
    marginLeft: -12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_sm,
    height: 80,
    width: 80,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  cef7fFlexBox: {
    top: 126,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_sm,
    height: 80,
    width: 80,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  bodyOpenSpaceBlock: {
    marginTop: 7,
    color: Color.white,
    textAlign: "left",
  },
  frameParentSpaceBlock: {
    paddingBottom: Padding.p_9xs,
    paddingTop: Padding.p_9xs,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  storesSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  tripsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_mini,
  },
  selectSotreBorder: {
    borderWidth: 1,
    borderColor: "#9747ff",
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  selectSotre1SpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
  },
  storeTypo: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  property1defaultPosition: {
    top: 20,
    position: "absolute",
  },
  locationIconLayout: {
    width: 24,
    height: 24,
  },
  navLayout: {
    height: 64,
    position: "absolute",
  },
  r: {
    backgroundColor: "#bebebe",
    width: 1279,
    position: "absolute",
    height: 490,
  },
  length: {
    top: 106,
    height: 45,
    left: 26,
    position: "absolute",
  },
  f8f8f8: {
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  lightGray: {
    backgroundColor: Color.whitesmoke_100,
    alignItems: "center",
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_sm,
    height: 80,
    width: 80,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
  },
  e3a8: {
    backgroundColor: "#98e3a8",
  },
  b2a51: {
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  b2a5: {
    backgroundColor: Color.lightseagreen,
  },
  cef7f0: {
    backgroundColor: Color.lightcyan,
  },
  cef7f02: {
    backgroundColor: Color.gray_700,
  },
  cef7f03: {
    backgroundColor: "#2d534e",
  },
  colors: {
    left: 840,
    flexDirection: "row",
  },
  cef7f04: {
    left: 970,
    backgroundColor: "#ffcf87",
  },
  cef7f05: {
    left: 1036,
    backgroundColor: Color.tan,
  },
  headerPoppins: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  titleLexend: {
    fontFamily: FontFamily.lexendBold,
    fontSize: FontSize.size_smi,
    marginTop: 7,
    fontWeight: "700",
  },
  bodyOpen: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_smi,
    marginTop: 7,
  },
  descriptionAvenir: {
    fontWeight: "300",
    fontFamily: FontFamily.montserrat,
    fontSize: FontSize.size_3xs,
  },
  fonts: {
    left: 641,
  },
  hebChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.red,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
    width: "100%",
  },
  hebIcon: {
    height: "66.67%",
    width: "29.97%",
    top: "16.67%",
    right: "62.02%",
    bottom: "16.67%",
    left: "8.01%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  autoAwesomeIcon: {
    width: 15,
    height: 15,
  },
  pts: {
    letterSpacing: 0.4,
    fontFamily: FontFamily.leagueGothicRegular,
    width: 45,
    marginLeft: 4,
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  storePoints: {
    top: 125,
    left: 267,
    width: 70,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  heb: {
    height: "30.61%",
    width: "26.35%",
    top: "47.35%",
    right: "7.74%",
    bottom: "22.04%",
    left: "65.91%",
    position: "absolute",
  },
  storesWrapper: {
    paddingHorizontal: Padding.p_31xl,
    width: 167,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.white,
  },
  trips: {
    marginLeft: 69,
  },
  frameParent: {
    top: 420,
    left: 500,
    paddingLeft: Padding.p_11xs,
    paddingRight: Padding.p_3xs,
    height: 35,
    width: 331,
    backgroundColor: Color.whitesmoke_300,
    alignItems: "center",
    position: "absolute",
  },
  storesContainer: {
    paddingHorizontal: Padding.p_31xl,
    width: 167,
    paddingVertical: Padding.p_9xs,
  },
  tripsWrapper: {
    width: 160,
    paddingLeft: 68,
    paddingRight: Padding.p_31xl,
    backgroundColor: Color.white,
  },
  frameGroup: {
    top: 422,
    left: 922,
    paddingHorizontal: Padding.p_11xs,
    height: 35,
    width: 331,
    backgroundColor: Color.whitesmoke_300,
    alignItems: "center",
    position: "absolute",
  },
  selectStore: {
    fontSize: FontSize.size_3xs,
    color: Color.black,
  },
  property1default: {
    left: 20,
    top: 20,
    position: "absolute",
    backgroundColor: Color.white,
  },
  selectStore1: {
    fontSize: FontSize.size_3xs,
    color: Color.white,
  },
  selectSotre1: {
    backgroundColor: Color.lightseagreen,
  },
  property1default1: {
    left: 111,
    flexDirection: "row",
  },
  selectSotre: {
    top: 154,
    left: 617,
    width: 208,
    height: 62,
    position: "absolute",
  },
  locationOnIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  findStore2: {
    fontSize: FontSize.size_2xs,
    letterSpacing: 0.2,
    color: Color.white,
  },
  blankLine: {
    fontSize: FontSize.size_3xs,
    color: Color.black,
  },
  findStore1: {
    top: 4,
    left: 34,
    width: 56,
    height: 16,
    position: "absolute",
  },
  findStore: {
    top: 223,
    left: 631,
    width: 90,
    height: 24,
    position: "absolute",
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
  navBar: {
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    flexDirection: "row",
    width: 390,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  navBarFixed: {
    top: 36,
    right: 863,
    left: 26,
  },
  property1selectIcon: {
    left: 50,
    top: 20,
    position: "absolute",
  },
  circleIcon: {
    width: 20,
    height: 20,
  },
  property1circle: {
    left: 14,
    padding: Padding.p_11xs,
    flexDirection: "row",
  },
  storeSelection: {
    top: 151,
    left: 851,
    width: 89,
    borderWidth: 1,
    borderColor: "#9747ff",
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  elements: {
    flex: 1,
    opacity: 0.15,
    height: 490,
    width: "100%",
  },
});

export default Elements;
