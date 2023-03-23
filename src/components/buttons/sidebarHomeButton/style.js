import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SideButton = styled(LinkS)`
  width: 230px;
  height: 50px;
  background-color: transparent;
  margin: 10px 15px 0px;
  padding: 0 10px;
  text-decoration: none;
  border-radius: 3px;
  color: ${({ color }) => color.textLight};
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  & > p {
    font-size: 1rem;
    margin: 0px 10px;
  }

  &.active {
    background-color: ${({ color }) => color.primary};
    color: ${({ color }) => color.textDark};
    box-shadow: 0 0px 10px rgba(0 0 0 0.2);
    cursor: default;

    & > p {
      font-weight: bold;
    }
  }
`;

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
