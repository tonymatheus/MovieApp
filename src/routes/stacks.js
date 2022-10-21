import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Movies } from "../screens/Movies";
import { Home } from "../screens/Home/intex";
import { Details } from "../screens/Details";
import { Search } from "../screens/Search";

const Stack = createStackNavigator();

export const StackRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Home} name="Home" options={{}} />
      <Stack.Screen
        component={Details}
        name="Details"
        options={{
          headerShown: false,
          title: "Detalhes",
        }}
      />
      <Stack.Screen
        component={Search}
        name="Search"
        options={{
          title: "Sua Busca",
          headerShown: true,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141a29",
          },
          headerTitleStyle: {
            color: "#fff",
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
