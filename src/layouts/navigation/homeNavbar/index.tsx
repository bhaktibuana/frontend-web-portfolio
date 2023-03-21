import React, { useEffect } from "react";
import { animateScroll } from "react-scroll";
import NavbarHomeButton from "../../../components/buttons/navbarHomeButton";
import HamburgerButton from "../../../components/buttons/hamburgerButton";
import { SiBitly } from "react-icons/si";
import { colorPalette } from "../../../constants/colorPalette";
import {
  Navigation,
  LeftContent,
  RightContent,
  LogoContainer,
  HamburgerContainer,
} from "./style";

interface ComponentProps {
  navButton: Array<object>;
}

const HomeNavbarLayout = ({ navButton }: ComponentProps) => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navigation data-testid="homeNavbar" color={colorPalette}>
        <LeftContent to="/" color={colorPalette} onClick={scrollToTop}>
          <LogoContainer>
            <SiBitly size={25} />
          </LogoContainer>
          Bhakti
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
