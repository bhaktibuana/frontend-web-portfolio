import React from "react";
import { colorPalette } from "../../constants/colorPalette";
import { Container, Image, ImageContainer, Title } from "./style";

interface ComponentPropsIface {
  title: string;
  src: string;
  imgSrc: string;
}

const SkillCard = ({ title, src, imgSrc }: ComponentPropsIface) => {
  return (
    <>
      <Container to={src} target="_blank" rel="noopener noreferrer">
        <ImageContainer>
          <Image src={imgSrc} />
        </ImageContainer>

        <Title color={colorPalette}>{title}</Title>
      </Container>
    </>
  );
};

export default SkillCard;
