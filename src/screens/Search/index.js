import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Container, ListMovies, Name } from "./styles";
import API, { Key } from "../../service/api";
import { SearchItem } from "../../components/SearchItem";

export const Search = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const getSearchMovie = async () => {
      const response = await API.get("/search/movie", {
        params: {
          query: route.params?.name,
          api_key: Key,
          language: "pt-BR",
          page: 1,
        },
      });

      if (isActive) {
        const responseMovieData = response?.data?.results;

        setMovie(responseMovieData);
        setIsloading(false);
        console.log(responseMovieData);
      }
    };

    if (isActive) {
      getSearchMovie();
    }

    return () => {
      isActive = false;
    };
  }, []);

  const navigateDetailsPage = (item) => {
    navigation.navigate("Details", {
      id: item.id,
    });
  };

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="red" animation={true} />
      </Container>
    );
  }

  return (
    <Container>
      <ListMovies
        showsVerticalScrollIndicator={false}
        data={movie}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SearchItem
            data={item}
            navigatePage={() => navigateDetailsPage(item)}
          />
        )}
      />
    </Container>
  );
};
