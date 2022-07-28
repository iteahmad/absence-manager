import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";
test("renders the button", () => {
  render(<Button>Test</Button>);
  const button = screen.getByText("Test");
  expect(button).toBeInTheDocument();
});

test("call the onClick callback", () => {
  const onClick = jest.fn(() => {});
  render(<Button onClick={onClick}>Test</Button>);
  const button = screen.getByText("Test");
  fireEvent.click(button);
  expect(onClick).toBeCalled();
});
