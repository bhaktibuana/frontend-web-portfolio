import React, { useEffect } from "react";
import { useNavigation } from "../../../contexts/NavigationProvider";
import { Container, DarkScreen } from "./style";

const safeDocument: any = typeof document !== "undefined" ? document : {};

const HomeSidebarLayout = () => {
  const { homeNavOpen, setHomeNavOpen } = useNavigation();

  useEffect(() => {
    const html = safeDocument.documentElement;
    if (homeNavOpen) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
  }, [homeNavOpen]);

  return (
    <>
      <Container
        className={`${homeNavOpen ? "open" : "close"}`}
        isOpen={homeNavOpen}
      >
        <DarkScreen
          className={`${homeNavOpen ? "open" : "close"}`}
          isOpen={homeNavOpen}
          onClick={() => setHomeNavOpen(false)}
        ></DarkScreen>
      </Container>
    </>
  );
};

export default HomeSidebarLayout;
