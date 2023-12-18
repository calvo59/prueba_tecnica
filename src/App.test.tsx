import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// This is the default test and it doesn't pass.
// Either delete it or make it pass.
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
