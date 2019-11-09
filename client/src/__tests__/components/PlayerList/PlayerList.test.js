import React from "react";
import { render, cleanup } from "@testing-library/react";
import PlayerList from "../../../components/PlayerList";
import playerData from "../../../../__mocks__/players";

afterEach(cleanup);

describe("PlayerList component tests", () => {
  it("should render the correct number of players", () => {
    const { getByTestId } = render(
      <PlayerList players={playerData} />,
    );
    const playerList = getByTestId("player-list");

    expect(playerList.children.length).toEqual(playerData.length);
  });
});
