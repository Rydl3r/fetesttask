import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("images render", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  fireEvent.click(screen.getByText("Shuffle Images"));
  expect(linkElement).toBeInTheDocument();
});
