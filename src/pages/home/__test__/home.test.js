import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import HomePage from "..";
import { BrowserRouter } from "react-router-dom";
import NavigationProvider from "../../../contexts/NavigationProvider";

afterEach(() => {
  cleanup();
});

test("should render home page", () => {
  render(
    <NavigationProvider>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </NavigationProvider>
  );
  const homePageElement = screen.getByTestId("homePage");
  const navbarElement = screen.getByTestId("homeNavbar");
  const sidebarElement = screen.getByTestId("homeSidebar");

  expect(homePageElement).toBeInTheDocument();
  expect(navbarElement).toBeInTheDocument();
  expect(sidebarElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <NavigationProvider>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </NavigationProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
