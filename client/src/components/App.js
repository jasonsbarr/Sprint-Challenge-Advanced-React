import React, { Component } from "react";
import PlayerList from "./PlayerList";

class App extends Component {
  state = { players: [] };

  render() {
    const { players } = this.state;
    return players.length ? (
      <PlayerList players={players} />
    ) : (
      <div>Haven't found any players yet...</div>
    );
  }
}

export default App;
