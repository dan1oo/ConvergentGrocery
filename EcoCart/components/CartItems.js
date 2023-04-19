import * as React from "react";
import {
  ScrollView,
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Padding, Border, FontFamily } from "../GlobalStyles";

const CartItems = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.cartItems}
      horizontal
      contentContainerStyle={styles.cartItemsScrollViewContent}
    >
      <View style={styles.lettuceParent}>
        <Pressable style={styles.lettuceLayout}>
          <View style={[styles.lettuceInner, styles.itemPosition]}>
            <View style={styles.instanceChild} />
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
              <Text style={[styles.freshRomaineLettuce, styles.textTypo]}>
                Fresh Romaine Lettuce
              </Text>
              <View style={styles.eaWrapper}>
                <Text style={[styles.ea, styles.eaTypo]}>ea.</Text>
              </View>
              <Text style={[styles.text, styles.textTypo]}>$1.81</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Image
              style={styles.deleteIcon}
              resizeMode="cover"
              source={require("../assets/delete1.png")}
            />
            <View style={styles.pointGain}>
              <Text style={[styles.xPt, styles.eaTypo]}>+X PT</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.pepper, styles.lettuceLayout]}>
          <View style={[styles.lettuceInner, styles.itemPosition]}>
            <View style={styles.instanceChild} />
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
              <Text style={[styles.freshRomaineLettuce, styles.textTypo]}>
                Fresh Red Bell Pepper
              </Text>
              <View style={styles.eaWrapper}>
                <Text style={[styles.ea, styles.eaTypo]}>ea.</Text>
              </View>
              <Text style={[styles.text, styles.textTypo]}>$1.54</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Image
              style={styles.deleteIcon}
              resizeMode="cover"
              source={require("../assets/delete1.png")}
            />
            <View style={styles.pointGain}>
              <Text style={[styles.xPt, styles.eaTypo]}>+X PT</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.avacado, styles.itemLayout]}>
          <View style={[styles.item, styles.itemLayout]}>
            <View style={[styles.item, styles.itemLayout]}>
              <View style={styles.instanceChild} />
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
                <Text style={[styles.freshRomaineLettuce, styles.textTypo]}>
                  Large Hass Avocados
                </Text>
                <View style={styles.eaWrapper}>
                  <Text style={[styles.ea, styles.eaTypo]}>ea.</Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>$1.54</Text>
              </View>
            </View>
            <View style={styles.details}>
              <Image
                style={styles.deleteIcon}
                resizeMode="cover"
                source={require("../assets/delete1.png")}
              />
              <View style={styles.pointGain}>
                <Text style={[styles.xPt, styles.eaTypo]}>+X PT</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.avacado, styles.itemLayout]}
          onPress={() => navigation.navigate("Item")}
        >
          <View style={[styles.item, styles.itemLayout]}>
            <View style={styles.instanceChild} />
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
              <Text style={[styles.freshRomaineLettuce, styles.textTypo]}>
                Non-fat Plain Greek Yogurt
              </Text>
              <View style={styles.eaWrapper}>
                <Text style={[styles.ea, styles.eaTypo]}>32 oz</Text>
              </View>
              <Text style={[styles.text, styles.textTypo]}>$5.08</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Image
              style={styles.deleteIcon}
              resizeMode="cover"
              source={require("../assets/delete1.png")}
            />
            <View style={styles.pointGain}>
              <Text style={[styles.xPt, styles.eaTypo]}>+X PT</Text>
            </View>
          </View>
        </Pressable>
        <View style={[styles.avacado, styles.itemLayout]}>
          <View style={[styles.item, styles.itemLayout]}>
            <View style={[styles.item, styles.itemLayout]}>
              <View style={styles.instanceChild} />
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
                <Text style={[styles.freshRomaineLettuce, styles.textTypo]}>
                  Non-fat Plain Greek Yogurt
                </Text>
                <View style={styles.eaWrapper}>
                  <Text style={[styles.ea, styles.eaTypo]}>ea.</Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>$1.40</Text>
              </View>
            </View>
            <View style={styles.details}>
              <Image
                style={styles.deleteIcon}
                resizeMode="cover"
                source={require("../assets/delete1.png")}
              />
              <View style={styles.pointGain}>
                <Text style={[styles.xPt, styles.eaTypo]}>+X PT</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cartItemsScrollViewContent: {
    flexDirection: "row",
  },
  itemPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  framePosition: {
    alignItems: "flex-end",
    left: 17,
    top: 11,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_smi,
    color: Color.black,
  },
  eaTypo: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  lettuceLayout: {
    height: 78,
    width: 330,
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
    flexDirection: "row",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  instanceChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.white,
    borderColor: "#ececec",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    width: "100%",
    position: "absolute",
  },
  lettuceInner: {
    height: 78,
    width: 330,
  },
  screenshot20230406At626: {
    width: 47,
    height: 55,
  },
  freshRomaineLettuce: {
    fontFamily: FontFamily.lexendRegular,
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
    fontWeight: "600",
    fontFamily: FontFamily.lexendSemibold,
    marginTop: 6,
  },
  freshRomaineLettuceParent: {
    marginLeft: 10,
  },
  frameParent: {
    width: 249,
  },
  deleteIcon: {
    left: 10,
    width: 20,
    height: 20,
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
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    left: 0,
    position: "absolute",
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
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
  },
  cartItems: {
    top: 900,
    left: 30,
    width: "100%",
    position: "absolute",
  },
});

export default CartItems;
