import styled from "styled-components/native";

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  background-color: #141a29;
  padding-left: 10px;
  margin-top: 40px;
`;

export const MenuButton = styled.TouchableOpacity`
  height: 70px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-left: 15px;
`;
