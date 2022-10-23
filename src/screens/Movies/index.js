import React, { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Container, ListMovies } from "./styles";

import { deleteMovie, getMoviesSaves } from "../../utils/storage";
import { FavoriteItem } from "../../components/FavoriteItem";
import { useNavigation, useIsFocused } from "@react-navigation/native";
export const Movies = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let isActive = true;

    const getFavoriteMovies = async () => {
      const movieResults = await getMoviesSaves("@favoritesave");
      if (isActive) {
        setMovies(movieResults);
      }
    };

    if (isActive) {
      getFavoriteMovies();
    }

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  const handleDelete = async (id) => {
    const result = await deleteMovie(id);
    setMovies(result);
  };

  const navigateDetails = async (item) => {
    navigation.navigate("Details", {
      id: item.id,
    });
  };

  return (
    <Container>
      <Header title="Meus filmes" />
      <ListMovies
        showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <FavoriteItem
            data={item}
            deleteMovie={handleDelete}
            navigatePage={() => navigateDetails(item)}
          />
        )}
      />
    </Container>
  );
};
