import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import {
  Container,
  Title,
  Rate,
  ActionContainer,
  DetailButton,
  DeleteButton,
  RateContainer,
} from "./styles";
export const FavoriteItem = ({ data, deleteMovie, navigatePage }) => {
  return (
    <Container>
      <Title size={22}>{data.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color="#e7a74e" />
        <Rate>{data?.vote_average.toFixed(1)}</Rate>
      </RateContainer>
      <ActionContainer>
        <DetailButton onPress={() => navigatePage(data.id)}>
          <Title size={18}>ver detalhes </Title>
        </DetailButton>

        <DeleteButton onPress={() => deleteMovie(data.id)}>
          <Feather name="trash" size={24} color="#fff" />
        </DeleteButton>
      </ActionContainer>
    </Container>
  );
};
