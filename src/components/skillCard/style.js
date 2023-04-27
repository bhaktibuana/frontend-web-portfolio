import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled(LinkR)`
  width: 100%;
  height: 120px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0.75rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  transition: 0.1s all ease-in-out;
  background-color: rgba(0, 0, 22, 0.9);

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ImageContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  max-width: 50px;
  max-height: 50px;
  aspect-ratio: 1;
  margin-bottom: 5px;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  color: ${({ color }) => color.textDark};
`;
