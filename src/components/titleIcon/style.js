import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  color: ${({ color }) => color.textLight};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > p {
    color: ${({ color }) => color.textLight};
    font-size: 20px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  &:hover,
  &:hover > p {
    color: ${({ color }) => color.primary};
  }
`;

export const LogoContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;
