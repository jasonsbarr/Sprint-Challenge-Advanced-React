import React, { useState } from "react";
import Player from "./Player";
import useFilter from "../../hooks/useFilter";

const PlayerList = ({ players }) => {
  const [searchString, setSearchString] = useState("");

  const searchFn = player => filter =>
    player.name.toLowerCase().includes(filter.toLowerCase());

  const [playerData, setPlayerData] = useFilter(
    searchFn,
    players,
    searchString,
  );

  const handleChange = e => {
    setSearchString(e.target.value);
    setPlayerData(e.target.value);
  };

  return (
    <>
      <input
        type="search"
        placeholder="Search for players by name..."
        value={searchString}
        onChange={handleChange}
      />
      {playerData ? (
        <ul data-testid="player-list">
          {playerData.map(player => (
            <Player key={player.name} player={player} />
          ))}
        </ul>
      ) : (
        <div>Players not loaded...</div>
      )}
    </>
  );
};

export default PlayerList;
