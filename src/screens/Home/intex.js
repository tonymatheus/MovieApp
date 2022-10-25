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

import { getListMovies, randomBanner } from "../../utils/movieAlgorithms";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const [nowMovies, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [bannerMovie, setBannerMovie] = useState({});
  const [input, setInput] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();
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

      if (isActive) {
        const nowList = getListMovies(10, nowData.data.results);
        const popularList = getListMovies(4, popularData.data.results);
        const topList = getListMovies(6, topData.data.results);
        const randomBannerMovie =
          nowData.data.results[randomBanner(nowData.data.results)];

        setBannerMovie(randomBannerMovie);

        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopMovies(topList);
        setIsLoading(false);
      }
    };

    getMovies();
    return () => {
      isActive = false;
      ac.abort();
    };
  }, []);

  const navigateWithDetailsPage = (item) => {
    navigation.navigate("Details", {
      id: item.id,
    });
  };

  const handleSearcMovie = () => {
    if (!input) {
      console.log("preencha algum nome");
      return;
    }
    navigation.navigate("Search", {
      name: input,
    });
    setInput("");
  };

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
      <Header title="MovieApp" />
      <SearchContainer>
        <Input
          placeholder="Ex : vingadores"
          placeholderTextColor="#ddd"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <SearchButton onPress={handleSearcMovie}>
          <Feather name="search" size={30} color="#fff" />
        </SearchButton>
      </SearchContainer>
      <ScrollView>
        <Title>Em cartaz</Title>
        <BannerButton
          activeOpacity={0.9}
          onPress={() => navigateWithDetailsPage(bannerMovie)}
        >
          <Banner
            resizeMethod="resize"
            source={{
              uri: `https://image.tmdb.org/t/p/original/${bannerMovie?.poster_path}`,
            }}
          />
        </BannerButton>
        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={nowMovies}
          renderItem={({ item }) => (
            <SliderItem
              data={item}
              navigatePage={() => navigateWithDetailsPage(item)}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
        <Title>Populares</Title>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={popularMovies}
          key={popularMovies.id}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <SliderItem
              data={item}
              navigatePage={() => navigateWithDetailsPage(item)}
            />
          )}
        />
        <Title>Mais Votados</Title>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={topMovies}
          renderItem={({ item }) => (
            <SliderItem
              data={item}
              navigatePage={() => navigateWithDetailsPage(item)}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </ScrollView>
    </Container>
  );
};
