import React, { Component } from "react";
import PlayerList from "./PlayerList";

const playerData = [
  { name: "Alex Morgan", country: "United States", searches: 100 },
  { name: "Megan Rapinoe", country: "United States", searches: 99 },
  { name: "Marta", country: "Brazil", searches: 18 },
  { name: "Rose Lavelle", country: "United States", searches: 11 },
  { name: "Carli Lloyd", country: "United States", searches: 9 },
  { name: "Julie Ertz", country: "United States", searches: 8 },
  { name: "Christen Press", country: "United States", searches: 8 },
  { name: "Kelley O'Hara", country: "United States", searches: 8 },
  { name: "Tobin Heath", country: "United States", searches: 7 },
  { name: "Wendie Renard", country: "France", searches: 7 },
  { name: "Kosovare Asllani", country: "Sweden", searches: 6 },
  { name: "Lieke Martens", country: "Netherlands", searches: 6 },
  { name: "Amandine Henry", country: "France", searches: 5 },
  { name: "Ali Krieger", country: "United States", searches: 5 },
  { name: "Mallory Pugh", country: "United States", searches: 4 },
  { name: "Samantha Kerr", country: "Australia", searches: 4 },
  { name: "Christiane Endler", country: "Chile", searches: 4 },
  {
    name: "Daniëlle van de Donk",
    country: "Netherlands",
    searches: 4,
  },
  { name: "Lucy Bronze", country: "England", searches: 4 },
  { name: "Ashlyn Harris", country: "United States", searches: 4 },
  { name: "Eugénie Le Sommer", country: "France", searches: 4 },
  { name: "Jackie Groenen", country: "Netherlands", searches: 4 },
  { name: "Abby Dahlkemper", country: "United States", searches: 3 },
  { name: "Steph Houghton", country: "England", searches: 3 },
  { name: "Vivianne Miedema", country: "Netherlands", searches: 3 },
];

class App extends Component {
  state = { players: [] };

  componentDidMount() {
    this.setState({ players: playerData });
  }

  render() {
    const { players } = this.state;

    return players.length ? (
      <div data-testid="app">
        <PlayerList players={players} />
      </div>
    ) : (
      <div>Haven't found any players yet...</div>
    );
  }
}

export default App;
