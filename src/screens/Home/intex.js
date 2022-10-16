import React from "react";

import {
  Container,
  Title,
  SearchContainer,
  Input,
  SearchButton,
  BannerButton,
  Banner,
  SliderMovie,
} from "./styles";

import { Header } from "../../components/Header";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { SliderItem } from "../../components/SliderItem";
export const Home = () => {
  return (
    <Container>
      <Header title="PrimeFaker" />
      <SearchContainer>
        <Input placeholder="Ex : vingadores" placeholderTextColor="#ddd" />
        <SearchButton>
          <Feather name="search" size={30} color="#fff" />
        </SearchButton>
      </SearchContainer>
      <ScrollView>
        <Title>Em cartaz</Title>
        <BannerButton activeOpacity={0.9} onPress={() => alert("Test")}>
          <Banner
            resizeMethod="resize"
            source={{
              uri: "https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg",
            }}
          />
        </BannerButton>
        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[1, 2, 3, 4]}
          key={1}
          renderItem={({ item }) => <SliderItem />}
        />
        <Title>Populares</Title>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[1, 2, 3, 4]}
          key={2}
          renderItem={({ item }) => <SliderItem />}
        />
        <Title>Mais Votados</Title>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[1, 2, 3, 4]}
          key={3}
          renderItem={({ item }) => <SliderItem />}
        />
      </ScrollView>
    </Container>
  );
};
