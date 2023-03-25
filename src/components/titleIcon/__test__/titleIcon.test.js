import {
  render,
  screen,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import TitleIcon from "..";
import { colorPalette } from "../../../constants/colorPalette";

afterEach(() => {
  cleanup();
});

test("should render title icon", async () => {
  render(<TitleIcon />);
  const titleIconElement = screen.getByTestId("titleIcon");
  const textElement = screen.getByTestId("titleIconText");

  expect(titleIconElement).toBeInTheDocument();
  expect(titleIconElement).toHaveTextContent("Bhakti Portfolio");
  expect(textElement).toHaveStyle({ color: colorPalette.textLight });
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <TitleIcon />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});