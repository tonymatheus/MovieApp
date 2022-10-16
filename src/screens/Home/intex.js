import React, { useEffect, useState } from "react";

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
import { ScrollView, ActivityIndicator } from "react-native";
import { SliderItem } from "../../components/SliderItem";
import API, { Key } from "../../service/api";

import { getListMovies } from "../../utils/movieAlgorithm";
const { API_Key } = process.env;

export const Home = () => {
  const [nowMovies, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isActive = false;
    const getMovies = async () => {
      const [nowData, popularData, topData] = await Promise.all([
        API.get("movie/now_playing/", {
          params: {
            api_key: Key,
            language: "pt-BR",
            page: 1,
          },
        }),
        API.get("movie/popular/", {
          params: {
            api_key: Key,
            language: "pt-BR",
            page: 1,
          },
        }),
        API.get("movie/top_rated/", {
          params: {
            api_key: Key,
            language: "pt-BR",
            page: 1,
          },
        }),
      ]);
      const nowList = getListMovies(10, nowData.data.results);
      const popularList = getListMovies(4, popularData.data.results);
      const topList = getListMovies(6, topData.data.results);

      setNowMovies(nowList);
      setPopularMovies(popularList);
      setTopMovies(topList);
      setIsLoading(false);
    };

    getMovies();
  }, []);

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator
          size="large"
          animating={true}
          style={{ marginTop: 50 }}
          color="#fff"
        />
      </Container>
    );
  }

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
          data={nowMovies}
          renderItem={({ item }) => <SliderItem data={item} />}
          keyExtractor={(item) => String(item.id)}
        />
        <Title>Populares</Title>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={popularMovies}
          key={popularMovies.id}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <SliderItem data={item} />}
        />
        <Title>Mais Votados</Title>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={topMovies}
          renderItem={({ item }) => <SliderItem data={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </ScrollView>
    </Container>
  );
};
