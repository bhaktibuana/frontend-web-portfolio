import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import HamburgerButton from "..";
import NavigationProvider from "../../../../contexts/NavigationProvider";

afterEach(() => {
  cleanup();
});

test("should render hamburger button", () => {
  render(
    <NavigationProvider>
      <HamburgerButton />
    </NavigationProvider>
  );
  const buttonElement = screen.getByTestId("hamburgerButton");

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("close");

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("open");

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("close");
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <NavigationProvider>
        <HamburgerButton />
      </NavigationProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
