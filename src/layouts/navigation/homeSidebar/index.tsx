import React, { useEffect } from "react";
import { animateScroll } from "react-scroll";
import { useNavigation } from "../../../contexts/NavigationProvider";
import { colorPalette } from "../../../constants/colorPalette";
import TitleIcon from "../../../components/titleIcon";
import {
  Container,
  DarkScreen,
  SidebarContent,
  SidebarLine,
  SidebarTitleContainer,
  SidebarTitle,
  SidebarItems,
} from "./style";

const safeDocument: any = typeof document !== "undefined" ? document : {};

const HomeSidebarLayout = () => {
  const { homeNavOpen, setHomeNavOpen } = useNavigation();

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

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
        />

        <SidebarContent isOpen={homeNavOpen} color={colorPalette}>
          <SidebarTitleContainer>
            <SidebarTitle to="/" onClick={scrollToTop}>
              <TitleIcon />
            </SidebarTitle>
          </SidebarTitleContainer>

          <SidebarLine color={colorPalette} />

          <SidebarItems>
            
          </SidebarItems>
        </SidebarContent>
      </Container>
    </>
  );
};

export default HomeSidebarLayout;
