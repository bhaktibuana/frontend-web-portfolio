import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 150;
  display: flex;
  justify-content: flex-end;
  left: -300%;
  left: ${({ isOpen }) => (isOpen ? "0" : "-300%")};
`;

export const DarkScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  position: fixed;

  &.open {
    animation: dark-screen-open 0.3s ease-in-out forwards;

    @keyframes dark-screen-open {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  &.close {
    animation: dark-screen-close 0.3s ease-in-out forwards;

    @keyframes dark-screen-close {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

export const SidebarContent = styled.nav`
  width: 260px;
  height: 100vh;
  background-color: ${({ color }) => color.bgLight};
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
  left: ${(props) => (props.isOpen ? "0" : "-300%")};
  display: flex;
  float: right;
  flex-direction: column;
  align-items: center;
  position: fixed;
  transition: all 0.3s ease-in-out;
  z-index: 160;
`;

export const SidebarLine = styled.div`
  width: calc(100% - 30px);
  height: 1px;
  background-color: ${({ color }) => color.bgDark};
`;

export const SidebarTitleContainer = styled.div`
  margin: 0px;
  padding: 15px 0px;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const SidebarTitle = styled(LinkR)`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const SidebarItems = styled.div`
  width: 100%;
  height: auto;
  background: transparent;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;
