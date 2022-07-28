import { render, screen } from "@testing-library/react";
import Heading from "./heading";
test("renders the heading", () => {
  render(<Heading>Test</Heading>);
  const heading = screen.getByText("Test");
  expect(heading).toBeInTheDocument();
});
