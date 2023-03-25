import React from "react";
import { SiBitly } from "react-icons/si";
import { colorPalette } from "../../constants/colorPalette";
import { Container, LogoContainer } from "./style";

const TitleIcon = () => {
  return (
    <>
      <Container data-testid="titleIcon" color={colorPalette}>
        <LogoContainer>
          <SiBitly size={25} />
        </LogoContainer>

        <p data-testid="titleIconText">Bhakti Portfolio</p>
      </Container>
    </>
  );
};

export default TitleIcon;
