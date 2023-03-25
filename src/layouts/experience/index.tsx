import React from "react";
import { colorPalette } from "../../constants/colorPalette";
import { Section } from "./style";

interface ComponentProps {
  id: string;
}

const ExperienceLayout = ({ id }: ComponentProps) => {
  return (
    <>
      <Section id={id} color={colorPalette}>
        ExperienceLayout
      </Section>
    </>
  );
};

export default ExperienceLayout;
