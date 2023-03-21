import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 150;
  display: flex;
  justify-content: flex-end;
  left: -300%;
  /* left: ${({ isOpen }) => (isOpen ? "0" : "-300%")}; */

  &.open {
    animation: sidebar-open 1s ease-in-out forwards;

    @keyframes sidebar-open {
      0% {
        left: -300%;
      }
      100% {
        left: 0;
      }
    }
  }

  &.close {
    animation: sidebar-close 1s ease-in-out forwards;

    @keyframes sidebar-close {
      0% {
        left: 0;
      }
      100% {
        left: -300%;
      }
    }
  }
`;

export const DarkScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; */
  /* opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; */
  /* animation-name: dark-screen 2s ease-in-out forwards; */

  &.open {
    animation: dark-screen-open 0.3s ease-in-out forwards;

    @keyframes dark-screen-open {
      0% {
        display: none;
      }
      5% {
        display: flex;
        opacity: 0;
      }
      100% {
        display: flex;
        opacity: 1;
      }
    }
  }

  &.close {
    animation: dark-screen-close 0.3s ease-in-out forwards;

    @keyframes dark-screen-close {
      0% {
        display: flex;
        opacity: 1;
      }
      95% {
        display: flex;
        opacity: 0;
      }
      100% {
        display: none;
      }
    }
  }
`;
