import React, { Component, useState } from "react";
import OptionsPanel from "../OptionsPanel";
import Board from "../Board";

import { createTiles } from "../../misc/utils";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null,
    };
  }

  startGame = (numTiles) => {
    this.setState((state) => ({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(state.numTiles),
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Turbo-Matcher</header>
        <OptionsPanel
          playing={this.state.playing}
          numTiles={this.state.numTiles}
          startGame={this.startGame}
        />
        <Board tiles={this.state.tiles} numTiles={this.state.numTiles} />
      </div>
    );
  }
}

export default App;

// I will use this to keep testing with functional components,
// but the test wont pass with this kind of component.

// export default function App() {
//   const [numTiles, setNumTiles] = useState(36);
//   const [playing, setPlaying] = useState(false);
//   const [previousTileIndex, setPreviousTileIndex] = useState(null);
//   const [tiles, setTiles] = useState([]);
//   const [toBeCleared, setToBeCleared] = useState(null);

//   const startGame = (numTilesProp) => {
//     setPlaying(true);
//     setPreviousTileIndex(null);
//     setToBeCleared(null);
//     setTiles(createTiles(numTiles));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">Turbo-Matcher</header>
//       <OptionsPanel
//         playing={playing}
//         numTiles={numTiles}
//         startGame={startGame}
//       />
//       <Board tiles={tiles} numTiles={numTiles} />
//     </div>
//   );
// }
