import React from "react";
import { colorPalette } from "../../constants/colorPalette";
import { Section } from "./style";

interface ComponentProps {
  id: string;
}

const PortfolioLayout = ({ id }: ComponentProps) => {
  return (
    <>
      <Section id={id} color={colorPalette}>
        PortfolioLayout
      </Section>
    </>
  );
};

export default PortfolioLayout;
