import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto;
  background-color: ${({ color }) => color.secondary};
  display: flex;
  flex-direction: column;
  padding: 0;
  transition: 0.3s all ease-in-out;

  @media screen and (max-width: 2560px) {
    padding: 0 calc((100vw - 1440px) / 2);
  }

  @media screen and (max-width: 1440px) {
    padding: 0 calc((100vw - 1024px) / 2);
  }

  @media screen and (max-width: 1024px) {
    padding: 0 calc((100vw - 768px) / 2 - 70px);
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const ExperienceContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 10px 10px 50px 10px;
  transition: 0.3 all ease-in-out;
  padding: 15px;
  display: flex;

  @media screen and (max-width: 425px) {
    width: 100%;
    height: auto;
    margin: 10px 0;
  }
`;

export const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background-color: ${({ color }) => color.bgLight};
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: 1;

    @media screen and (max-width: 600px) {
      left: 21px;
    }
  }
`;
