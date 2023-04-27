import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto;
  min-height: 800px;
  background-color: ${({ color }) => color.tertiary};
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
    padding: 0 calc((100vw - 768px) / 2);
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const SkillsContainer = styled.div`
  width: calc(100% - 60px);
  height: auto;
  margin: 10px 30px 50px 30px;
  transition: 0.3s all ease-in-out;
  padding: 15px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(6, minmax(0px, 1fr));

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, minmax(0px, 1fr));
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    height: auto;
    margin: 10px 0;
  }
`;
