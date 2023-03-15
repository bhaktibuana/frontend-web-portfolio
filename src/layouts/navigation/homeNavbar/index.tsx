import React from "react";
import { SiBitly } from "react-icons/si";
import { Navigation, LeftContent, RightContent, LogoContainer } from "./style";
import { colorPalette } from "../../../constants/colorPalette";

const HomeNavbar = () => {
  return (
    <>
      <Navigation color={colorPalette}>
        <LeftContent to="/" color={colorPalette}>
          <LogoContainer>
            <SiBitly size={25} />
          </LogoContainer>
          Bhakti
        </LeftContent>

        <RightContent></RightContent>
      </Navigation>
    </>
  );
};

export default HomeNavbar;
