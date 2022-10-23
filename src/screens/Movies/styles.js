import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #191a29;
`;

export const MyMoviesContaier = styled.View`
  width: 100%;
  height: 190px;
  top: 10px;
`;
export const Rate = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const RateContainer = styled.View`
  margin-left: 20px;
  padding: 10px;
  justify-content: center;
`;

export const MeanTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 800;
`;
export const DetailButtonContaier = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const DetailButton = styled.TouchableOpacity`
  background-color: #e72f49;
  width: 80%;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 15px;
`;

export const TrashButton = styled.TouchableOpacity``;
