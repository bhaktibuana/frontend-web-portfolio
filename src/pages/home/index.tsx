import React from "react";
import HomeNavbar from "../../layouts/navigation/homeNavbar";
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
        <HomeNavbar navButton={navButtonArr} />

        <Section id="home" color="red" />
        <Section id="about" color="green" />
        <Section id="skills" color="blue" />
      </Container>
    </>
  );
};

export default HomePage;
