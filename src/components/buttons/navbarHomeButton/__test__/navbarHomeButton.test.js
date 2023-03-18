import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import NavbarHomeButton from "..";

afterEach(() => {
  cleanup();
});

test("should render button", () => {
  render(<NavbarHomeButton text="Home" scrollTo="home" />);
  const buttonElement = screen.getByTestId("navbarHomeButton");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("Home");
});

test("matches snapshot", () => {
  const tree = renderer
    .create(<NavbarHomeButton text="Home" scrollTo="home" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
