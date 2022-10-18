import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: #191a30; ;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  height: 190px;
  z-index: 99;
  position: absolute;
  top: 50px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: rgba(25, 26, 48, 0.8);
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 490px;
  border-bottom-left-radius: 75px;
  border-bottom-right-radius: 75px;
`;

export const ButonLink = styled.TouchableOpacity`
  align-items: center;
  border-radius: 35px;
  justify-content: center;
  background-color: #e72f49;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 420px;
  right: 10px;
  z-index: 99;
`;

export const ContentArea = styled.View`
  padding: 0 16px;
  right: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Rate = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
`;
