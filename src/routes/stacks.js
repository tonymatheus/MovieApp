import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Movies } from "../screens/Movies";
import { Home } from "../screens/Home/intex";
import { Details } from "../screens/Details";

const Stack = createStackNavigator();

export const StackRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Home} name="Home" options={{}} />
      <Stack.Screen component={Details} name="Details" options={{}} />
    </Stack.Navigator>
  );
};
