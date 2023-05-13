import React from "react";
import { colorPalette } from "../../constants/colorPalette";
import { Container, ImageCard, ProfileImage } from "./style";

interface ComponentPropsIface {
  src: string;
}

const ProfileImageCard = ({ src }: ComponentPropsIface) => {
  return (
    <>
      <Container>
        <ImageCard color={colorPalette}>
          <ProfileImage src={src} color={colorPalette} />
        </ImageCard>
      </Container>
    </>
  );
};

export default ProfileImageCard;
