import { View, Text } from "react-native";
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../home";
import Message from "../message";
import Setting from "../setting";

const BottomTab = () => {

const Tab = createMaterialBottomTabNavigator()

  return (
    <Tab.Navigator
    initialRouteName="home"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      headerShown:false
    }}
    activeColor="#77c6e6"
    barStyle={{ backgroundColor: '#1e98c9' }}
  >
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={Message}
      options={{
        tabBarLabel: 'Message',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chat" color={color} size={size} />
        ),
        // tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="settings"
      component={Setting}
      options={{
        tabBarLabel: 'Paramètre',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-settings-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default BottomTab;
