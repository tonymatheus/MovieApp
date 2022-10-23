import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  padding: 14px;
`;
export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  padding-left: 12px;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 14px;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.size}px;
  color: #fff;
  font-weight: bold;
  padding-left: 10px;
`;
export const Rate = styled.Text`
  color: #fff;
  font-size: 14px;
  padding-left: 4px;
`;
export const DetailButton = styled.TouchableOpacity`
  width: 85%;
  height: 40px;
  background-color: #e72f49;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
export const DeleteButton = styled.TouchableOpacity`
  width: 15%;
  height: 30px;
  align-items: center;
  justify-content: center;
`;
