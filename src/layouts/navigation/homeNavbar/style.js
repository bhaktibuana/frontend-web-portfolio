import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 65px;
  z-index: 140;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0;
  background-color: ${({ color }) => color.bgLight};
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.3);
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 2560px) {
    padding: 17px calc((100vw - 1440px) / 2);
  }

  @media screen and (max-width: 1440px) {
    padding: 17px calc((100vw - 1024px) / 2);
  }

  @media screen and (max-width: 1024px) {
    padding: 17px calc((100vw - 768px) / 2);
  }

  @media screen and (max-width: 768px) {
    padding: 17px 15px;
  }
`;

export const LeftContent = styled(LinkR)`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const RightContent = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
  }
`;

export const HamburgerContainer = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
