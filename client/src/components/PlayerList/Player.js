import React from "react";

const Player = ({ name, country, searches }) => (
  <li>
    <span>Player:</span> {name} - <span>Team:</span> {country} -{" "}
    <span>Searches:</span> {searches}
  </li>
);

export default Player;
