import React from "react";
import { Container, BannerItem, RateContainer, Rate, Title } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export const SliderItem = ({ data, navigatePage }) => {
  return (
    <Container activeOpacity={0.7} onPress={() => navigatePage(data)}>
      <BannerItem
        resizeMethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`,
        }}
      />
      <Title numberOfLines={1}>{data.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={13} color="#e7a74e" />
        <Rate>{Number(data?.vote_average).toFixed(1)}</Rate>
      </RateContainer>
    </Container>
  );
};
