import React, { useState, useEffect } from "react";
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
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [alphaValue, setAlphaValue] = useState<number>(0);

  const scrollToTop = (): void => {
    animateScroll.scrollToTop();
  };

  const listenScrollEvent = (): void => {
    if (window.scrollY < 1) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  };

  const handleNavColor = (): void => {
    let y = (window.scrollY || window.pageYOffset) / 150;
    y = y > 3 ? 3 : y;
    y = y / 3 - 0.2;
    y = y < 0 ? 0 : y;
    setAlphaValue(y);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("scroll", handleNavColor);
  }, []);

  return (
    <>
      <Navigation
        data-testid="homeNavbar"
        color={colorPalette}
        scroll={isScroll}
        alpha={alphaValue}
      >
        <LeftContent data-testid="homeNavbarTitle" to="/" onClick={scrollToTop}>
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
