import React from "react";
import { SiBitly } from "react-icons/si";
import { colorPalette } from "../../constants/colorPalette";
import { Container, LogoContainer } from "./style";

const TitleIcon = () => {
  return (
    <>
      <Container color={colorPalette}>
        <LogoContainer>
          <SiBitly size={25} />
        </LogoContainer>

        <p>Bhakti Portfolio</p>
      </Container>
    </>
  );
};

export default TitleIcon;
