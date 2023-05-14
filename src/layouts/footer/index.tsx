import React from "react";
import { colorPalette } from "../../constants/colorPalette";
import { Section } from "./style";

const FooterLayout = () => {
  return (
    <>
      <Section color={colorPalette}>
        <h1 style={{ color: "gray", fontSize: "4rem" }}>COMING SOON</h1>
      </Section>
    </>
  );
};

export default FooterLayout;
