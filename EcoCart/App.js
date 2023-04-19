const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BarcodeScanner from "./screens/BarcodeScanner";
import { useFonts } from "expo-font";
import FindAStore1 from "./screens/FindAStore1";
import FindAStore02 from "./screens/FindAStore02";
import StoreRewards from "./screens/StoreRewards";
import BarcodeScanner01 from "./screens/BarcodeScanner01";
import BarcodeScanner02 from "./screens/BarcodeScanner02";
import CartList from "./screens/CartList";
import TripReport from "./screens/TripReport";
import Item from "./screens/Item";
import Rewards from "./screens/Rewards";
import TripHistory from "./screens/TripHistory";
import Profile from "./screens/Profile";
import FindAStore from "./screens/FindAStore";
import Notes from "./screens/Notes";
import Map1 from "./screens/Map1";
import BarcodeScanner3 from "./screens/BarcodeScanner3";
import HistoryTrips from "./screens/HistoryTrips";
import FrameScreen from "./screens/FrameScreen";
import HistoryStore from "./screens/HistoryStore";
import Rewards1 from "./screens/Rewards1";
import BarcodeScannerAlternate from "./screens/BarcodeScannerAlternate";
import About from "./screens/About";
import HomePage from "./screens/HomePage";
import HistoryTrip from "./screens/HistoryTrip";
import Elements from "./screens/Elements";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    "Open Sans_regular": require("./assets/fonts/Open_Sans_regular.ttf"),
    "Open Sans_semibold": require("./assets/fonts/Open_Sans_semibold.ttf"),
    Montserrat_light: require("./assets/fonts/Montserrat_light.ttf"),
    Lexend_light: require("./assets/fonts/Lexend_light.ttf"),
    Lexend_regular: require("./assets/fonts/Lexend_regular.ttf"),
    Lexend_medium: require("./assets/fonts/Lexend_medium.ttf"),
    Lexend_semibold: require("./assets/fonts/Lexend_semibold.ttf"),
    Lexend_bold: require("./assets/fonts/Lexend_bold.ttf"),
    Lexend_extrabold: require("./assets/fonts/Lexend_extrabold.ttf"),
    "League Gothic_regular": require("./assets/fonts/League_Gothic_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="FindAStore"
              component={FindAStore1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FindAStore02"
              component={FindAStore02}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StoreRewards"
              component={StoreRewards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BarcodeScanner01"
              component={BarcodeScanner01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BarcodeScanner"
              component={BarcodeScanner}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartList"
              component={CartList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TripReport"
              component={TripReport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item"
              component={Item}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rewards"
              component={Rewards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TripHistory"
              component={TripHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FindAStore1"
              component={FindAStore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notes"
              component={Notes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map"
              component={Map1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BarcodeScanner3"
              component={BarcodeScanner3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoryTrips"
              component={HistoryTrips}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame43"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoryStore"
              component={HistoryStore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rewards1"
              component={Rewards1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BarcodeScannerAlternate"
              component={BarcodeScannerAlternate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoryTrip"
              component={HistoryTrip}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Elements"
              component={Elements}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
