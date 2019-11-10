import React, { useState } from "react";
import Player from "./Player";
import useFilter from "../../hooks/useFilter";

const PlayerList = ({ players }) => {
  const [searchString, setSearchString] = useState("");

  const searchFn = player => filter =>
    player.name.toLowerCase().includes(filter.toLowerCase());

  const playerData = useFilter(searchFn, players, searchString);

  return playerData.length ? (
    <>
      <input
        type="search"
        placeholder="Search for players by name..."
        value={searchString}
        onChange={e => setSearchString(e.target.value)}
      />
      <ul data-testid="player-list">
        {playerData.map(player => (
          <Player key={player.name} player={player} />
        ))}
      </ul>
    </>
  ) : (
    <div>Players not loaded...</div>
  );
};

export default PlayerList;
