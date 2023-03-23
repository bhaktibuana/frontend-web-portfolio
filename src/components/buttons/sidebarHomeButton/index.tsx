import React, { ReactElement } from "react";
import { colorPalette } from "../../../constants/colorPalette";
import { SideButton } from "./style";

interface ComponentProps {
  text: string;
  scrollTo: string;
  icon: ReactElement;
}

const SidebarHomeButton = ({ text, scrollTo, icon }: ComponentProps) => {
  return (
    <>
      <SideButton
        color={colorPalette}
        activeClass="active"
        spy={true}
        to={scrollTo}
        smooth={true}
        duration={500}
        delay={100}
        offset={-65}
      >
        {icon}
        <p>{text}</p>
      </SideButton>
    </>
  );
};

export default SidebarHomeButton;
