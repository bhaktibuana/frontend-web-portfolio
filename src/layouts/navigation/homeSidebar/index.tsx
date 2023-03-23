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
import SidebarHomeButton from "../../../components/buttons/sidebarHomeButton";
interface ComponentProps {
  navButton: Array<object>;
}

export const safeDocument: any = typeof document !== "undefined" ? document : {};

const HomeSidebarLayout = ({ navButton }: ComponentProps) => {
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
        data-testid="homeSidebar"
        className={`${homeNavOpen ? "open" : "close"}`}
        isOpen={homeNavOpen}
      >
        <DarkScreen
          data-testid="homeSidebarDarkScreen"
          className={`${homeNavOpen ? "open" : "close"}`}
          isOpen={homeNavOpen}
          onClick={() => setHomeNavOpen(false)}
        />

        <SidebarContent isOpen={homeNavOpen} color={colorPalette}>
          <SidebarTitleContainer>
            <SidebarTitle
              data-testid="homeSidebarTitle"
              to="/"
              onClick={scrollToTop}
            >
              <TitleIcon />
            </SidebarTitle>
          </SidebarTitleContainer>

          <SidebarLine color={colorPalette} />

          <SidebarItems>
            {navButton.map(({ text, scrollTo, icon }: any, index) => (
              <SidebarHomeButton
                key={index}
                icon={icon}
                text={text}
                scrollTo={scrollTo}
              />
            ))}
          </SidebarItems>
        </SidebarContent>
      </Container>
    </>
  );
};

export default HomeSidebarLayout;
