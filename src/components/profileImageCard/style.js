import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageCard = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  aspect-ratio: 3/4;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    background-image: ${({ color }) => `linear-gradient(
      180deg,
      ${color.primary},
      ${color.primary}  
    );`};
    height: 130%;
    animation: rotBGimg 7s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    0% {
      transform: rotate(0deg);
      opacity: 70%;
      box-shadow: ${({ color }) =>
        `0 0 5px ${color.primary}, 0 0 10px ${color.primary}, 0 0 15px ${color.primary}, 0 0 20px ${color.primary}, 0 0 35px ${color.primary}, 0 0 40px ${color.primary}, 0 0 50px ${color.primary}, 0 0 75px ${color.primary}`};
    }

    50% {
      opacity: 100%;
      box-shadow: ${({ color }) =>
        `0 0 10px ${color.primary}, 0 0 20px ${color.primary}, 0 0 30px ${color.primary}, 0 0 40px ${color.primary}, 0 0 70px ${color.primary}, 0 0 80px ${color.primary}, 0 0 100px ${color.primary}, 0 0 150px ${color.primary}`};
    }

    100% {
      transform: rotate(360deg);
      opacity: 70%;
      box-shadow: ${({ color }) =>
        `0 0 5px ${color.primary}, 0 0 10px ${color.primary}, 0 0 15px ${color.primary}, 0 0 20px ${color.primary}, 0 0 35px ${color.primary}, 0 0 40px ${color.primary}, 0 0 50px ${color.primary}, 0 0 75px ${color.primary}`};
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: 5px;
    border-radius: 20px;
  }
`;

export const ProfileImage = styled.img`
  width: 98%;
  height: auto;
  aspect-ratio: 3/4;
  border-radius: inherit;
  z-index: 1;
  box-shadow: ${({ color }) => `0 0 3px ${color.secondary}`};
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;
