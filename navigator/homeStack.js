import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function HomeStack ({navigation}) {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerTitle : () => <Header navigation={navigation} title={"Juegos"} />, headerTitleAlign: "center" }}/>
          <Stack.Screen name="Details" component={ReviewDetails} options={{ title: "Detalles del juego", headerTintColor: "#333", 
          headerTitleAlign: "center" }}/>
        </Stack.Navigator>  
    );
 }

// const { Navigator, Screen } = createStackNavigator();

// const HomeNavigator = () => (
//   <Navigator screenOptions={{ headerStyle: { backgroundColor: "#7F13B8"}, headerTintColor:"white" }}>
//     <Screen name="Home" component={Home} />
//     <Screen name="Details" component={ReviewDetails} />
//   </Navigator>
// );

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <HomeNavigator />
//   </NavigationContainer>
// );

// screenOptions={{ 
// headerStyle: { backgroundColor: "#7F13B8"}, 
// headerTintColor:"white", 
// headerTitleAlign: "center",
// header
// }}>

          // options={({navigation}) => {
          //   return {
          //     header: () => <AppHeader navigation={navigation} />,
          //   };
          // }}