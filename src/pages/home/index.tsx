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
import { Container } from "./style";
import AboutLayout from "../../layouts/about";
import SkillsLayout from "../../layouts/skills";
import ExperienceLayout from "../../layouts/experience";
import PortfolioLayout from "../../layouts/portfolio";
import BlogLayout from "../../layouts/blog";
import ContactLayout from "../../layouts/contact";
import FooterLayout from "../../layouts/footer";

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
    scrollTo: "portfolio",
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
      <Container data-testid="homePage">
        <HomeSidebarLayout navButton={navButtonArr} />
        <HomeNavbarLayout navButton={navButtonArr} />

        <HomeLayout id="home" />
        <AboutLayout id="about" />
        <SkillsLayout id="skills" />
        <ExperienceLayout id="experience" />
        <PortfolioLayout id="portfolio" />
        <BlogLayout id="blog" />
        <ContactLayout id="contact" />
        <FooterLayout />
      </Container>
    </>
  );
};

export default HomePage;
