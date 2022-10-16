import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Details = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};
