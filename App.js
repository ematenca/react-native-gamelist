import React from 'react';
import { useFonts } from "expo-font"
import AppLoading from 'expo-app-loading';
import { DrawerNavigation } from "./navigator/drawer";

export default function App() {

  const [fontsLoaded] = useFonts({
    "Shadows": require("./assets/fonts/ShadowsIntoLight-Regular.ttf"),
    "Raleway": require("./assets/fonts/Raleway-Regular.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />  
  }
    return ( 
       <DrawerNavigation />
    )
  }