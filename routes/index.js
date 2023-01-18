import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../ecrans/home";
import BottomTab from "../ecrans/tabs";
import MessageDetails from '../messageDetails'

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home" component={BottomTab} />
        <Stack.Screen name="messageDetails" component={MessageDetails} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
