import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Title } from "./styles";

export const Details = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Details</Title>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Title>Voltar</Title>
      </TouchableOpacity>
    </Container>
  );
};
