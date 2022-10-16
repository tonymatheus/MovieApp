import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthDrawer } from "./src/routes";
import { StackRoute } from "./src/routes/stacks";

export const App = () => {
  return (
    <NavigationContainer>
      <AuthDrawer />
    </NavigationContainer>
  );
};
