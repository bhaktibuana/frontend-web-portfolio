import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import SidebarHomeButton from "..";
import { navButtonArr } from "../../../../pages/home";

afterEach(() => {
  cleanup();
});

test("should render button", () => {
  render(
    <SidebarHomeButton
      text={navButtonArr[0].text}
      scrollTo={navButtonArr[0].scrollTo}
      icon={navButtonArr[0].icon}
    />
  );
  const buttonElement = screen.getByTestId("sidebarHomeButton");

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("Home");
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <SidebarHomeButton
        text={navButtonArr[0].text}
        scrollTo={navButtonArr[0].scrollTo}
        icon={navButtonArr[0].icon}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
