import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto;
  background-color: ${({ color }) => color.bgLight};
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

export const AboutContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 10px 10px 50px 10px;
  transition: 0.3 all ease-in-out;
  padding: 15px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    height: auto;
    margin: 10px 0;
  }
`;

export const PhotoContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 50px;

  @media screen and (max-width: 1024px) {
    padding-left: 30px;
    padding-right: 15px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 80px;
    padding: 0 80px;
  }

  @media screen and (max-width: 425px) {
    margin-top: 50px;
    padding: 0;
  }
`;

export const InfoTitle = styled.p`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: ${({ color }) => color.textLight};
`;

export const InfoSubtitle = styled.p`
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: ${({ color }) => color.textLight};
`;

export const InfoDescription = styled.p`
  font-size: 1rem;
  margin: 15px 0;
  text-align: justify;
  color: ${({ color }) => color.textLight};
`;

export const ContactContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const ContactIcon = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid ${({ color }) => color.primary};
  color: ${({ color }) => color.primary};
`;

export const ContactInfo = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ color }) => color.textLight};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;
