import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RNCamera } from "react-native-camera";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";

const BarcodeScanner = () => {
  const navigation = useNavigation();

  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Barcode data: ${data}`);
  };

  useEffect(() => {
    return () => {
      setScanned(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        onBarCodeRead={scanned ? undefined : handleBarCodeScanned}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
      >
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle} />
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  rectangle: {
    height: 200,
    width: 200,
    borderWidth: 2,
    borderColor: "#00FF00",
    backgroundColor: "transparent",
  },
});

export default BarcodeScanner;
