import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function AboutStack ({navigation}) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="About" component={About} options={{ headerTitle : () => <Header navigation={navigation} title={"About page"} />, headerTitleAlign: "center" }}/>
      </Stack.Navigator>
    );
 }