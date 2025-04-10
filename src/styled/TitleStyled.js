import { styled } from "styled-components";

const TitleStyled = styled.h1.withConfig({
  displayName: "TitleStyled", // 고유한 이름 지정
})`
  color: #4caf50;
`;

export default TitleStyled;
