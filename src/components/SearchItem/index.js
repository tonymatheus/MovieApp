import React from "react";
import { View, Text } from "react-native";
import { Container, Banner, Title, RateContainer, Rate } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export const SearchItem = ({ data, navigatePage }) => {
  const datailMovie = () => {
    if (data.release_data === null) {
      alert("Filme ainda não possui data");
      return;
    }
    navigatePage(data);
  };

  return (
    <Container activeOpacity={0.7} onPress={datailMovie}>
      {data?.poster_path ? (
        <Banner
          source={{
            uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`,
          }}
        />
      ) : (
        <Banner source={require("../../assets/semfoto.png")} />
      )}
      <Title>{data?.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color="#e7a74e" />
        <Rate>{data?.vote_average}/10 </Rate>
      </RateContainer>
    </Container>
  );
};
