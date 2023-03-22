import React from "react";
import { animateScroll } from "react-scroll";
import NavbarHomeButton from "../../../components/buttons/navbarHomeButton";
import HamburgerButton from "../../../components/buttons/hamburgerButton";
import { colorPalette } from "../../../constants/colorPalette";
import {
  Navigation,
  LeftContent,
  RightContent,
  HamburgerContainer,
} from "./style";
import TitleIcon from "../../../components/titleIcon";

interface ComponentProps {
  navButton: Array<object>;
}

const HomeNavbarLayout = ({ navButton }: ComponentProps) => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <Navigation data-testid="homeNavbar" color={colorPalette}>
        <LeftContent to="/" onClick={scrollToTop}>
          <TitleIcon />
        </LeftContent>

        <RightContent>
          {navButton.map(({ text, scrollTo }: any, index) => (
            <NavbarHomeButton key={index} text={text} scrollTo={scrollTo} />
          ))}
        </RightContent>

        <HamburgerContainer>
          <HamburgerButton />
        </HamburgerContainer>
      </Navigation>
    </>
  );
};

export default HomeNavbarLayout;
