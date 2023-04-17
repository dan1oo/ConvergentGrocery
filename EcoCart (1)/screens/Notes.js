import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Notes = () => {
  return (
    <View style={styles.notes}>
      <Text style={styles.notesAddAbout}>{`Notes:

Add About section
main screen
list of products 

discount bar (progress bar type)
in cart (0, +1, +2 --> )
points threshold for discount   
add/remove item in cart list
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notesAddAbout: {
    fontSize: FontSize.size_6xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black,
    textAlign: "left",
    width: 455,
    height: 599,
  },
  notes: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1019,
    flexDirection: "row",
    paddingHorizontal: 31,
    paddingVertical: 53,
    display: "none",
  },
});

export default Notes;
