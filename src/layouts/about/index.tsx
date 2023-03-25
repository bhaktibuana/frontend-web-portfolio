import React from "react";
import { colorPalette } from "../../constants/colorPalette";
import { Section } from "./style";

interface ComponentProps {
  id: string;
}

const AboutLayout = ({ id }: ComponentProps) => {
  return (
    <>
      <Section id={id} color={colorPalette}>
        AboutLayout
      </Section>
    </>
  );
};

export default AboutLayout;
