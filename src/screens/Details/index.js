import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
} from "./styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import API, { Key } from "../../service/api";
import Stars from "react-native-stars";
export const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState({});

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
        setMovie(response.data);
        console.log(response.data);
      }
    };

    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color="#fff" />
        </HeaderButton>
        <HeaderButton>
          <Ionicons name="bookmark" size={30} color="#fff" />
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        }}
      />

      <ButonLink opacity={0.3}>
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
    </Container>
  );
};
