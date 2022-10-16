import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, BannerItem, RateContainer, Rate, Title } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export const SliderItem = () => {
  const navigation = useNavigation();

  return (
    <Container
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Details")}
    >
      <BannerItem
        resizeMethod="resize"
        source={{
          uri: "https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg",
        }}
      />
      <Title numberOfLines={1}>Vingadores</Title>
      <RateContainer>
        <Ionicons name="md-star" size={13} color="#e7a74e" />
        <Rate>9/10</Rate>
      </RateContainer>
    </Container>
  );
};
