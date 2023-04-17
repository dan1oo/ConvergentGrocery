import * as React from "react";
import { StyleSheet, Text, View , SafeAreaView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapView from "react-native-maps";
import { StatusBar } from 'expo-status-bar';
import { CartScreen } from "./components/CartScreen.jsx"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <CartScreen ></CartScreen>
    </View>
  );
  }

function BarcodeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Insert BarcodeScanner</Text>
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Insert History</Text>
    </View>
  );
}

function RewardsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Insert Rewards</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={HomeScreen} />
      <Tab.Screen name ="Cart" component={CartScreen} />
      <Tab.Screen name="BarcodeScanner" component={BarcodeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}