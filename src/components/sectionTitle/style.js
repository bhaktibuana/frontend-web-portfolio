import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 0 30px 0;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  color: ${({ color, isBgDark }) =>
    isBgDark ? color.textDark : color.textLight};
`;

export const TitleContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
`;

export const TitleText = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const FirstTitle = styled.span`
  font-family: "Poppins", sans-serif;
  color: ${({ color, isBgDark }) =>
    isBgDark ? color.textDark : color.textLight};
`;

export const SeconTitle = styled.span`
  font-family: "Poppins", sans-serif;
  color: ${({ color }) => color.primary};
`;
