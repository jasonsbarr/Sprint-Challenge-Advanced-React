import React from "react";
import Player from "./Player";

const PlayerList = ({ players }) => {
  return players.length ? (
    <ul data-testid="player-list">
      {players.map(player => (
        <Player key={player.name} player={player} />
      ))}
    </ul>
  ) : (
    <div>Players not loaded...</div>
  );
};

export default PlayerList;
