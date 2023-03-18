import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import HomeNavbar from "..";
import { navButtonArr } from "../../../../pages/home";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("should render navbar", () => {
  render(
    <BrowserRouter>
      <HomeNavbar navButton={navButtonArr} />
    </BrowserRouter>
  );
  const navbarElement = screen.getByTestId("homeNavbar");
  expect(navbarElement).toBeInTheDocument();
  expect(navbarElement).toHaveTextContent("Bhakti");
  navButtonArr.map(({ text }) => expect(navbarElement).toHaveTextContent(text));
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <HomeNavbar navButton={navButtonArr} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
