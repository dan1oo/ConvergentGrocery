import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StoreContainer from "../components/StoreContainer";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CartList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cartList}>
      <StatusBar style={styles.topPosition} barStyle="default" />
      <Pressable
        style={[styles.finish, styles.finishFlexBox]}
        onPress={() => navigation.navigate("TripReport")}
      >
        <Text style={styles.finish1Typo}>Finish</Text>
        <Image
          style={[styles.doneIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/done1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.continueScrolling, styles.cartPosition]}
        onPress={() => navigation.navigate("BarcodeScanner02")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/arrow-back1.png")}
        />
        <Text style={[styles.continueScanning, styles.finish1Typo]}>
          Continue Scanning
        </Text>
      </Pressable>
      <Text style={[styles.cart, styles.cartPosition]}>{`Cart `}</Text>
      <StoreContainer />
      <View style={styles.lettuceParent}>
        <View style={styles.lettuceLayout}>
          <View style={[styles.lettuceInner, styles.lettuceLayout]}>
            <View style={[styles.instanceChild, styles.pointGainLayout]} />
          </View>
          <View style={[styles.frameParent, styles.framePosition]}>
            <View style={styles.wrapperLayout}>
              <Image
                style={styles.screenshot20230406At626}
                resizeMode="cover"
                source={require("../assets/screenshot-20230406-at-626-1.png")}
              />
            </View>
            <View style={styles.freshRomaineLettuceParent}>
              <Text style={[styles.freshRomaineLettuce, styles.cartItems5Typo]}>
                Fresh Romaine Lettuce
              </Text>
              <View style={styles.eaWrapper}>
                <Text style={[styles.ea, styles.eaTypo]}>ea.</Text>
              </View>
              <Text style={styles.text}>$1.81</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Image
              style={[styles.deleteIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/delete1.png")}
            />
            <View style={[styles.pointGain, styles.pointGainLayout]}>
              <Text style={[styles.xPt, styles.eaTypo]}>+X PT</Text>
            </View>
          </View>
        </View>
        <View style={[styles.pepper, styles.lettuceLayout]}>
          <View style={[styles.lettuceInner, styles.lettuceLayout]}>
            <View style={[styles.instanceChild, styles.pointGainLayout]} />
          </View>
          <View style={[styles.frameParent, styles.framePosition]}>
            <View style={styles.wrapperLayout}>
              <Image
                style={styles.screenshot20230406At626}
                resizeMode="cover"
                source={require("../assets/screenshot-20230406-at-626-11.png")}
              />
            </View>
            <View style={styles.freshRomaineLettuceParent}>
              <Text style={[styles.freshRomaineLettuce, styles.cartItems5Typo]}>
                Fresh Red Bell Pepper
              </Text>
              <View style={styles.eaWrapper}>
                <Text style={[styles.ea, styles.eaTypo]}>ea.</Text>
              </View>
              <Text style={styles.text}>$1.54</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Image
              style={[styles.deleteIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/delete1.png")}
            />
            <View style={[styles.pointGain, styles.pointGainLayout]}>
              <Text style={[styles.xPt, styles.eaTypo]}>+X PT</Text>
            </View>
          </View>
        </View>
        <View style={[styles.avacado, styles.itemLayout]}>
          <View style={[styles.item, styles.itemLayout]}>
            <View style={[styles.item, styles.itemLayout]}>
              <View style={[styles.instanceChild, styles.pointGainLayout]} />
            </View>
            <View style={[styles.frameContainer, styles.framePosition]}>
              <View style={[styles.image3Wrapper, styles.wrapperLayout]}>
                <Image
                  style={styles.image3Icon}
                  resizeMode="cover"
                  source={require("../assets/image-3.png")}
                />
              </View>
              <View style={styles.freshRomaineLettuceParent}>
                <Text
                  style={[styles.freshRomaineLettuce, styles.cartItems5Typo]}
                >
                  Large Hass Avocados
                </Text>
                <View style={styles.eaWrapper}>
                  <Text style={[styles.ea, styles.eaTypo]}>ea.</Text>
                </View>
                <Text style={styles.text}>$1.54</Text>
              </View>
            </View>
            <View style={styles.details}>
              <Image
                style={[styles.deleteIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/delete1.png")}
              />
              <View style={[styles.pointGain, styles.pointGainLayout]}>
                <Text style={[styles.xPt, styles.eaTypo]}>+X PT</Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.avacado, styles.itemLayout]}
          onPress={() => navigation.navigate("Item")}
        >
          <View style={[styles.item, styles.itemLayout]}>
            <View style={[styles.instanceChild, styles.pointGainLayout]} />
          </View>
          <View style={[styles.frameContainer, styles.framePosition]}>
            <View style={styles.wrapperLayout}>
              <Image
                style={styles.screenshot20230406At626}
                resizeMode="cover"
                source={require("../assets/screenshot-20230406-at-626-12.png")}
              />
            </View>
            <View style={styles.freshRomaineLettuceParent}>
              <Text style={[styles.freshRomaineLettuce, styles.cartItems5Typo]}>
                Non-fat Plain Greek Yogurt
              </Text>
              <View style={styles.eaWrapper}>
                <Text style={[styles.ea, styles.eaTypo]}>32 oz</Text>
              </View>
              <Text style={styles.text}>$5.08</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Image
              style={[styles.deleteIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/delete1.png")}
            />
            <View style={[styles.pointGain, styles.pointGainLayout]}>
              <Text style={[styles.xPt, styles.eaTypo]}>+X PT</Text>
            </View>
          </View>
        </Pressable>
        <View style={[styles.avacado, styles.itemLayout]}>
          <View style={[styles.item, styles.itemLayout]}>
            <View style={[styles.item, styles.itemLayout]}>
              <View style={[styles.instanceChild, styles.pointGainLayout]} />
            </View>
            <View style={[styles.frameContainer, styles.framePosition]}>
              <View style={[styles.image3Wrapper, styles.wrapperLayout]}>
                <Image
                  style={styles.image2Icon}
                  resizeMode="cover"
                  source={require("../assets/image-2.png")}
                />
              </View>
              <View style={styles.freshRomaineLettuceParent}>
                <Text
                  style={[styles.freshRomaineLettuce, styles.cartItems5Typo]}
                >
                  Non-fat Plain Greek Yogurt
                </Text>
                <View style={styles.eaWrapper}>
                  <Text style={[styles.ea, styles.eaTypo]}>ea.</Text>
                </View>
                <Text style={styles.text}>$1.40</Text>
              </View>
            </View>
            <View style={styles.details}>
              <Image
                style={[styles.deleteIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/delete1.png")}
              />
              <View style={[styles.pointGain, styles.pointGainLayout]}>
                <Text style={[styles.xPt, styles.eaTypo]}>+X PT</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.cartItems5, styles.cartItems5Typo]}>
        Cart Items (5)
      </Text>
      <View style={[styles.cartListChild, styles.cartPosition]} />
      <View style={[styles.navBar, styles.navBarFlexBox]}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("FindAStore02")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/location-on1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          onPress={() => navigation.navigate("CartList")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/shopping-cart1.png")}
          />
        </Pressable>
        <Pressable 
          style={[styles.shoppingCartIcon, styles.iconLayout]} onPress={() => navigation.navigate("BarcodeScanner")}>
          <Image
            resizeMode="cover"
            source={require("../assets/barcode-scanner.png")}
         />
        </Pressable>
        <Pressable
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          onPress={() => navigation.navigate("TripReport")}
        >
          <Image resizeMode="cover" source={require("../assets/article.png")} />
        </Pressable>
        <Pressable
          style={[styles.shoppingCartIcon, styles.iconLayout]}
          onPress={() => navigation.navigate("Rewards")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/auto-awesome.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarBorder: {
    borderTopWidth: 0.5,
    borderStyle: "solid",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  topPosition: {
    top: 0,
    position: "absolute",
  },
  finishFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.lightcyan,
    borderRadius: Border.br_6xl,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  cartPosition: {
    left: 30,
    position: "absolute",
  },
  finish1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.lexendSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    color: Color.black,
  },
  lettuceLayout: {
    height: 78,
    width: 330,
  },
  pointGainLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  framePosition: {
    alignItems: "flex-end",
    left: 17,
    top: 11,
    position: "absolute",
    flexDirection: "row",
  },
  cartItems5Typo: {
    fontFamily: FontFamily.lexendRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.black,
  },
  eaTypo: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  itemLayout: {
    width: 332,
    height: 78,
  },
  wrapperLayout: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_7xs,
    height: 60,
    width: 60,
    borderWidth: 0.5,
    borderColor: "#d9d9d9",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    borderStyle: "solid",
  },
  doneIcon: {
    marginLeft: 6,
  },
  finish: {
    top: 728,
    left: 276,
    alignItems: "center",
    position: "absolute",
  },
  continueScanning: {
    marginLeft: 10,
  },
  continueScrolling: {
    top: 726,
    height: 44,
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.lightcyan,
    borderRadius: Border.br_6xl,
    justifyContent: "center",
    flexDirection: "row",
  },
  cart: {
    top: 51,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
  },
  instanceChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderColor: "#ececec",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    width: "100%",
  },
  lettuceInner: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  screenshot20230406At626: {
    width: 47,
    height: 55,
  },
  freshRomaineLettuce: {
    width: 191,
  },
  ea: {
    fontWeight: "300",
    fontFamily: FontFamily.lexendLight,
    color: Color.black,
    fontSize: FontSize.size_5xs,
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
    marginTop: 6,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.lexendSemibold,
    fontWeight: "600",
  },
  freshRomaineLettuceParent: {
    marginLeft: 10,
  },
  frameParent: {
    width: 249,
  },
  deleteIcon: {
    left: 10,
    top: 0,
    position: "absolute",
  },
  xPt: {
    fontWeight: "800",
    fontFamily: FontFamily.lexendExtrabold,
    color: Color.teal,
  },
  pointGain: {
    top: 43,
    backgroundColor: Color.azure,
    padding: Padding.p_11xs,
    left: 0,
    flexDirection: "row",
  },
  details: {
    top: 14,
    left: 287,
    width: 30,
    height: 57,
    position: "absolute",
  },
  pepper: {
    marginTop: 20,
  },
  item: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  image3Icon: {
    width: 50,
    height: 50,
  },
  image3Wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  frameContainer: {
    width: 251,
  },
  avacado: {
    marginTop: 20,
  },
  image2Icon: {
    width: 42,
    height: 49,
  },
  lettuceParent: {
    top: 231,
    left: 29,
    alignItems: "center",
    position: "absolute",
  },
  cartItems5: {
    top: 194,
    left: 30,
    position: "absolute",
  },
  cartListChild: {
    top: 218,
    borderColor: "#a7a7a7",
    width: 331,
    height: 1,
    borderTopWidth: 0.5,
    borderStyle: "solid",
  },
  cartList: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 866,
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  navBar: {
    top: 783,
    left: 0,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    width: 390,
    height: 64,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Color.white,
  },
  shoppingCartIcon: {
    marginLeft: 44,
  },
});

export default CartList;
