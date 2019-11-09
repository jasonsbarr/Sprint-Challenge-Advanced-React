import React from "react";

const Player = ({ player: { name, country, searches } }) => {
  return (
    <li>
      <span>Player:</span> {name} – <span>Team:</span> {country} –{" "}
      <span>Searches:</span> {searches}
    </li>
  );
};

export default Player;
