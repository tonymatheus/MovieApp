import React from "react";
import { Container, Name, Title } from "./styles";
import { View, Text } from "react-native";
export const Genres = ({ data }) => {
  return (
    <Container>
      <Name>{data.name}</Name>
    </Container>
  );
};
