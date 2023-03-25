import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import HomeNavbarLayout from "..";
import { navButtonArr } from "../../../../pages/home";
import { BrowserRouter } from "react-router-dom";
import NavigationProvider from "../../../../contexts/NavigationProvider";

afterEach(() => {
  cleanup();
});

test("should render home navbar", () => {
  render(
    <NavigationProvider>
      <BrowserRouter>
        <HomeNavbarLayout navButton={navButtonArr} />
      </BrowserRouter>
    </NavigationProvider>
  );
  const navbarElement = screen.getByTestId("homeNavbar");
  const hamburgerElement = screen.getByTestId("hamburgerButton");
  const titleElement = screen.getByTestId("homeNavbarTitle");

  expect(navbarElement).toBeInTheDocument();
  expect(navbarElement).toHaveTextContent("Bhakti Portfolio");
  expect(hamburgerElement).toBeInTheDocument();
  navButtonArr.map(({ text }) => expect(navbarElement).toHaveTextContent(text));

  fireEvent.click(titleElement);
  expect(window.screenY).toEqual(0);

  fireEvent.scroll(window, { target: { scrollY: 500 } });
  expect(navbarElement).not.toHaveStyle({ background: "transparent" });

  fireEvent.scroll(window, { target: { scrollY: 0 } });
  expect(navbarElement).toHaveStyle({ background: "transparent" });
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <NavigationProvider>
        <BrowserRouter>
          <HomeNavbarLayout navButton={navButtonArr} />
        </BrowserRouter>
      </NavigationProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
