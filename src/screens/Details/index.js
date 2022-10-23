import React, { useState, useEffect } from "react";
import { ScrollView, Modal } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Banner,
  Container,
  Header,
  HeaderButton,
  Title,
  ButonLink,
  ContentArea,
  Rate,
  ListGenres,
  Description,
  TitleDescription,
} from "./styles";

import { Feather, Ionicons } from "@expo/vector-icons";
import API, { Key } from "../../service/api";
import Stars from "react-native-stars";
import { Genres } from "../../Genres";
import WebView from "react-native-webview";
import { ModalLink } from "../../components/ModalLink";
import {
  deleteMovie,
  getMoviesSaves,
  hasMovie,
  saveMovie,
} from "../../utils/storage";

export const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState({});
  const [openLink, setOpenLink] = useState(false);
  const [favoriteMovie, setFavoriteMovie] = useState(false);
  const [newinput, setNewInput] = useState("");

  useEffect(() => {
    let isActive = true;

    const getMovie = async () => {
      const response = await API.get(`/movie/${route.params?.id}`, {
        params: {
          api_key: Key,
          language: "pt-BR",
        },
      }).catch((error) => console.log(error));

      if (isActive) {
        const movieData = response.data;
        setMovie(movieData);

        const isFavorite = await hasMovie(movieData);
        setFavoriteMovie(isFavorite);
      }
    };

    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
    };
  }, []);

  const favoriteMovieSave = async (movie) => {
    if (favoriteMovie) {
      await deleteMovie(movie.id);
      setFavoriteMovie(false);
      alert("Filme removido da lista");
    } else {
      await saveMovie("@favoritesave", movie);
      setFavoriteMovie(true);
      alert("filme salvo  com  suceso");
    }
  };

  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color="#fff" />
        </HeaderButton>
        <HeaderButton onPress={() => favoriteMovieSave(movie)}>
          {favoriteMovie ? (
            <Ionicons name="bookmark" size={30} color="#fff" />
          ) : (
            <Ionicons name="bookmark-outline" size={30} color="#fff" />
          )}
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        }}
      />

      <ButonLink opacity={0.3} onPress={() => setOpenLink(true)}>
        <Feather name="link" size={24} color="#fff" />
      </ButonLink>
      <Title numberOfLines={1}>{movie.title}</Title>
      <ContentArea>
        <Stars
          default={movie.vote_average}
          starSize={20}
          color="#e73e"
          count={10}
          half={true}
          fullStart={<Ionicons name="md-start" size={24} color="#e73e" />}
          emptyStart={
            <Ionicons name="md-start-outline" size={24} color="#e73e" />
          }
          halfStart={<Ionicons name="md-start-half" size={24} color="#e73e" />}
        />
        <Rate>{movie.vote_average}/10</Rate>
      </ContentArea>

      <ListGenres
        data={movie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Genres data={item} />}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <TitleDescription>Descrisção</TitleDescription>
        <Description>{movie.overview}</Description>
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={openLink}>
        <ModalLink
          title={movie?.title}
          link={movie?.homepage}
          closeModal={() => setOpenLink(false)}
        />
      </Modal>
    </Container>
  );
};
