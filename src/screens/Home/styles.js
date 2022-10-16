import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #191a29;
  padding: 4px 0;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;

  padding-bottom: 8px;
  margin-top: 20px;
  margin-left: 25px;
  font-weight: bold;
`;

export const BannerButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 6px;

  margin: 10px;
`;

export const Banner = styled.Image`
  width: 90%;
  height: 190px;
  border-radius: 15px;
  margin: 0 14px;
`;

export const SliderMovie = styled.FlatList`
  width: 368px;
  border-radius: 8px;
  margin: 0 14px;
`;

export const SearchContainer = styled.KeyboardAvoidingView`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  align-items: center;
  border-radius: 10px;
  padding: 0 14px;
  margin-bottom: 8px;
`;
export const Input = styled.TextInput`
  padding: 8px 15px;
  background-color: rgba(255, 255, 255, 0.4);
  width: 85%;
  margin-right: 10px;
  height: 55px;
  border-radius: 50px;
  font-weight: 300px;
  font-size: 18px;
  color: #fff;
`;
export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
