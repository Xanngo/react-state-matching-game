import React, { Component, useState } from 'react';
import OptionsPanel from '../OptionsPanel';
import Board from '../Board';

import { createTiles, indexOfSelected, setIn } from '../../misc/utils';

import './App.css';

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
      tiles: createTiles(state.numTiles, this.handleTileClicked),
    }));
  };

  handleTileClicked = (id, color) => {
    this.setState((state) => {
      let tiles = state.tiles;
      let toBeCleared = null;
      const selectedTileIndex = indexOfSelected(state.tiles, id, color);
      let previousTileIndex = state.previousTileIndex;

      if (state.toBeCleared !== null) {
        tiles = setIn(tiles, state.toBeCleared[0], 'selected', false);
        tiles = setIn(tiles, state.toBeCleared[1], 'selected', false);
        toBeCleared = null;
      }

      tiles = setIn(tiles, selectedTileIndex, 'selected', true);

      if (previousTileIndex !== null) {
        if (
          tiles[selectedTileIndex].id !== tiles[previousTileIndex].id &&
          tiles[selectedTileIndex].color === tiles[previousTileIndex].color
        ) {
          tiles = setIn(tiles, selectedTileIndex, 'matched', true);
          tiles = setIn(tiles, previousTileIndex, 'matched', true);
          previousTileIndex = null;
        } else {
          toBeCleared = [previousTileIndex, selectedTileIndex];
          previousTileIndex = null;
        }
      } else {
        previousTileIndex = selectedTileIndex;
      }

      return {
        previousTileIndex,
        tiles: tiles,
        toBeCleared,
      };
    });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>Turbo-Matcher</header>
        <OptionsPanel playing={this.state.playing} numTiles={this.state.numTiles} startGame={this.startGame} />
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
