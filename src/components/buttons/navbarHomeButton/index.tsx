import React from "react";
import { colorPalette } from "../../../constants/colorPalette";
import { NavButton } from "./style";

interface ComponentProps {
  text: string;
  scrollTo: string;
}

const NavbarHomeButton = ({ text, scrollTo }: ComponentProps) => {
  return (
    <>
      <NavButton
        data-testid="navbarHomeButton"
        color={colorPalette}
        activeClass="active"
        spy={true}
        to={scrollTo}
        smooth={true}
        duration={500}
        delay={100}
        offset={-65}
      >
        {text}
      </NavButton>
    </>
  );
};

export default NavbarHomeButton;
