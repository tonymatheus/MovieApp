import React from "react";
import { View, Text } from "react-native";
import { BackButton, Name } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import WebView from "react-native-webview";
export const ModalLink = ({ title, link, closeModal }) => {
  return (
    <>
      <BackButton onPress={closeModal}>
        <Feather name="x" size={35} color="#fff" />
        <Name numberOfLines={1}>{title}</Name>
      </BackButton>
      <WebView source={{ uri: link }} />
    </>
  );
};
