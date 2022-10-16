import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../screens/Home/intex";
import { Movies } from "../screens/Movies";
import { colors } from "../utils/colors";
import { StackRoute } from "./stacks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const AuthDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: "bold",
          color: colors.white,
        },
        activeBackgroundColor: colors.attention,
        activeTintColor: colors.white,
        inactiveTintColor: colors.white,
      }}
      drawerStyle={{
        backgroundColor: colors.dark_primary,
      }}
    >
      <Drawer.Screen
        component={StackRoute}
        name="Home"
        options={{
          title: "Home",
          drawerIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        component={Movies}
        name="Movies"
        options={{
          title: "Meus Filmes",

          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "archive" : "archive-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
