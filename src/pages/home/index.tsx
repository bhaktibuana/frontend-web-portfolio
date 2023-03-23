import React, { useEffect } from "react";
import { animateScroll } from "react-scroll";
import {
  MdHome,
  MdAssignmentInd,
  MdWorkHistory,
  MdOutlineAppRegistration,
  MdArticle,
  MdMail,
} from "react-icons/md";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import HomeNavbarLayout from "../../layouts/navigation/homeNavbar";
import HomeLayout from "../../layouts/home";
import HomeSidebarLayout from "../../layouts/navigation/homeSidebar";
import { Container, Section } from "./style";

export const navButtonArr = [
  {
    text: "Home",
    scrollTo: "home",
    icon: <MdHome size={24} />,
  },
  {
    text: "About",
    scrollTo: "about",
    icon: <MdAssignmentInd size={24} />,
  },
  {
    text: "Skills",
    scrollTo: "skills",
    icon: <BsFillFileEarmarkCodeFill size={24} />,
  },
  {
    text: "Experience",
    scrollTo: "experience",
    icon: <MdWorkHistory size={24} />,
  },
  {
    text: "Portfolio",
    scrollTo: "protfolio",
    icon: <MdOutlineAppRegistration size={24} />,
  },
  {
    text: "Blog",
    scrollTo: "blog",
    icon: <MdArticle size={24} />,
  },
  {
    text: "Contact",
    scrollTo: "contact",
    icon: <MdMail size={24} />,
  },
];

const HomePage = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Container>
        <HomeSidebarLayout navButton={navButtonArr} />
        <HomeNavbarLayout navButton={navButtonArr} />

        <HomeLayout id="home" />
        <Section id="about" color="green" />
        <Section id="skills" color="blue" />
      </Container>
    </>
  );
};

export default HomePage;
