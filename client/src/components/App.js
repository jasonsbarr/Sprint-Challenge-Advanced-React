import React, { Component } from "react";
import PlayerList from "./PlayerList";

class App extends Component {
  state = { players: [] };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(response => response.json())
      .then(players => this.setState({ players }))
      .catch(error => console.error(error));
  }

  render() {
    const { players } = this.state;

    return players.length ? (
      <div data-testid="app">
        <PlayerList players={players} />
      </div>
    ) : (
      <div data-testid="app">Haven't found any players yet...</div>
    );
  }
}

export default App;
