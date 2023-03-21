import React from "react";
import { Section } from "./style";

interface ComponentProps {
  id: string;
}

const HomeLayout = ({ id }: ComponentProps) => {
  return (
    <>
      <Section id={id}>Hello Home</Section>
    </>
  );
};

export default HomeLayout;
