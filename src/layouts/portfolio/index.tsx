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
        <h1 style={{ color: "gray", fontSize: "4rem" }}>COMING SOON</h1>
      </Section>
    </>
  );
};

export default PortfolioLayout;
