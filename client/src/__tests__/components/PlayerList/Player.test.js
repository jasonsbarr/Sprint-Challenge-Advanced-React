import React from "react";
import { render, cleanup } from "@testing-library/react";
import Player from "../../../components/PlayerList/Player";

afterEach(cleanup);

describe("Single Player component", () => {
  it("Displays a player's info", () => {
    const player = {
      name: "Alex Morgan",
      country: "United States",
      searches: 100,
    };
    const { container } = render(<Player player={player} />);

    expect(container.textContent).toMatch(/Alex Morgan/);
    expect(container.textContent).toMatch(/United States/);
    expect(container.textContent).toMatch(/100/);
  });
});
