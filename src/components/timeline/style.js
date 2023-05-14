import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 50px;
  position: relative;
  width: 50%;
  left: ${({ position }) => (position === "left" ? "0" : "50%")};

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 10px;
    left: 0;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  top: 32px;
  z-index: 10;
  background-color: ${({ color, isHover }) =>
    isHover ? color.secondary : color.bgLight};
  border: 3px solid
    ${({ color, isHover }) => (isHover ? color.primary : color.bgLight)};
  color: ${({ color, isHover }) => (isHover ? color.primary : color.textLight)};
  display: flex;
  justify-content: center;
  align-items: center;
  right: ${({ position }) => position === "left" && "-20px"};
  left: ${({ position }) => position === "right" && "-20px"};
  transition: 0.2s all ease-in-out;

  @media screen and (max-width: 600px) {
    left: 0px;
  }
`;

export const ContainerArrow = styled.span`
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: ${({ position, color }) =>
    position === "left" ? `17px solid ${color.bgLight}` : "none"};
  border-right: ${({ position, color }) =>
    position === "right" ? `17px solid ${color.bgLight}` : "none"};
  right: ${({ position }) => position === "left" && "-15px"};
  left: ${({ position }) => position === "right" && "-15px"};
  transition: 0.2s all ease-in-out;

  @media screen and (max-width: 600px) {
    border-right: 17px solid ${({ color }) => color.bgLight};
    border-left: none;
    left: -15px;
  }
`;

export const TextBox = styled.div`
  padding: 20px 30px;
  background-color: ${({ color }) => color.bgLight};
  position: relative;
  border-radius: 6px;
  font-size: 15px;
  transition: 0.2s all ease-in-out;
  color: ${({ color }) => color.textLight};
  box-shadow: 0 10px 10px ${({ color }) => color.bgDark};

  &:hover {
    background-color: ${({ color }) => color.primary};
    color: ${({ color }) => color.textDark};
    box-shadow: none;
  }

  &:hover ${ContainerArrow} {
    border-left: ${({ position, color }) =>
      position === "left" ? `17px solid ${color.primary}` : "none"};
    border-right: ${({ position, color }) =>
      position === "right" ? `17px solid ${color.primary}` : "none"};

    @media screen and (max-width: 600px) {
      border-right: 17px solid ${({ color }) => color.primary};
      border-left: none;
      left: -15px;
    }
  }

  &:hover ~ ${IconContainer} {
    border: 1px solid ${({ color }) => color.primary};
  }
`;

export const CompanyName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const JobTitle = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const JobPeriod = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

export const JobDesc = styled.p`
  font-size: 1rem;
`;
