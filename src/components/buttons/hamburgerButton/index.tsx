import React, { useRef } from "react";
import { useNavigation } from "../../../contexts/NavigationProvider";
import { colorPalette } from "../../../constants/colorPalette";
import { Container } from "./style";

const HamburgerButton = () => {
  const { homeNavOpen, setHomeNavOpen } = useNavigation();
  const hamburgerRef = useRef<HTMLInputElement>(null);

  const handleHomeNav = (): void => {
    const hamburgerElement = hamburgerRef.current;
    const isClassOpen = hamburgerElement?.className
      .split(" ")
      .find((element) => element === "close");

    if (isClassOpen) {
      setHomeNavOpen(true);
    } else {
      setHomeNavOpen(false);
    }
  };

  return (
    <>
      <Container
        ref={hamburgerRef}
        color={colorPalette}
        className={`${homeNavOpen ? "open" : "close"}`}
        onClick={handleHomeNav}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Container>
    </>
  );
};

export default HamburgerButton;
