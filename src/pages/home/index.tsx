import React from "react";
import HomeNavbarLayout from "../../layouts/navigation/homeNavbar";
import HomeLayout from "../../layouts/home";
import HomeSidebarLayout from "../../layouts/navigation/homeSidebar";
import { Container, Section } from "./style";

export const navButtonArr = [
  { text: "Home", scrollTo: "home" },
  { text: "About", scrollTo: "about" },
  { text: "Skills", scrollTo: "skills" },
  { text: "Experience", scrollTo: "experience" },
  { text: "Portfolio", scrollTo: "protfolio" },
  { text: "Blog", scrollTo: "blog" },
  { text: "Contact", scrollTo: "contact" },
];

const HomePage = () => {
  return (
    <>
      <Container>
        <HomeSidebarLayout />
        <HomeNavbarLayout navButton={navButtonArr} />

        <HomeLayout id="home" />
        <Section id="about" color="green" />
        <Section id="skills" color="blue" />
      </Container>
    </>
  );
};

export default HomePage;
