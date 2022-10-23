import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import {
  Container,
  MyMoviesContaier,
  Title,
  Rate,
  DetailButton,
  DetailButtonContaier,
  MeanTitle,
  TrashButton,
  RateContainer,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export const Movies = () => {
  return (
    <Container>
      <Header title="Meus filmes" />
      <MyMoviesContaier>
        <RateContainer>
          <MeanTitle>Cruela</MeanTitle>
          <Ionicons name="md-star" size={20} color="#e7a74e" />
          <Rate>10/10</Rate>
        </RateContainer>
        <DetailButtonContaier>
          <DetailButton>
            <Title>Ver detalhes</Title>
          </DetailButton>
          <TrashButton>
            <Ionicons name="md-trash" size={30} color="#FFF" />
          </TrashButton>
        </DetailButtonContaier>
      </MyMoviesContaier>
    </Container>
  );
};
