import React from "react";
import { colorPalette } from "../../constants/colorPalette";
import { Section } from "./style";

interface ComponentProps {
  id: string;
}

const BlogLayout = ({ id }: ComponentProps) => {
  return (
    <>
      <Section id={id} color={colorPalette}>
        BlogLayout
      </Section>
    </>
  );
};

export default BlogLayout;
