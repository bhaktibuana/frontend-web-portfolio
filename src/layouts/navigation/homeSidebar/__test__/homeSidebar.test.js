import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import HomeSidebarLayout, { safeDocument } from "..";
import HamburgerButton from "../../../../components/buttons/hamburgerButton";
import { navButtonArr } from "../../../../pages/home";
import { BrowserRouter } from "react-router-dom";
import NavigationProvider from "../../../../contexts/NavigationProvider";

afterEach(() => {
  cleanup();
});

test("should render home sidebar", () => {
  render(
    <NavigationProvider>
      <HamburgerButton />
      <BrowserRouter>
        <HomeSidebarLayout navButton={navButtonArr} />
      </BrowserRouter>
    </NavigationProvider>
  );
  const sidebarElement = screen.getByTestId("homeSidebar");
  const darkScreenElement = screen.getByTestId("homeSidebarDarkScreen");
  const titleElement = screen.getByTestId("homeSidebarTitle");
  const hamburgerElement = screen.getByTestId("hamburgerButton");

  expect(sidebarElement).toBeInTheDocument();
  expect(sidebarElement).toHaveClass("close");
  expect(sidebarElement).toHaveTextContent("Bhakti Portfolio");
  expect(darkScreenElement).toBeInTheDocument();
  navButtonArr.map(({ text }) =>
    expect(sidebarElement).toHaveTextContent(text)
  );

  fireEvent.click(hamburgerElement);
  expect(sidebarElement).toHaveClass("open");
  expect(safeDocument.documentElement.style.overflow).toEqual("hidden");

  fireEvent.click(titleElement);
  expect(window.screenY).toEqual(0);

  fireEvent.click(darkScreenElement);
  expect(sidebarElement).toHaveClass("close");
  expect(safeDocument.documentElement.style.overflow).toEqual("");
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <NavigationProvider>
        <HamburgerButton />
        <BrowserRouter>
          <HomeSidebarLayout navButton={navButtonArr} />
        </BrowserRouter>
      </NavigationProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
