import React from 'react';

import Button from '../Button';
import TileSelector from '../TileSelector';

const OptionsPanel = ({ playing, numTiles, startGame, handleNumTileChange }) => (
  <div>
    <TileSelector numTiles={numTiles} handleNumTileChange={handleNumTileChange} />
    <Button playing={playing} startGame={startGame}>
      ls
    </Button>
  </div>
);

export default OptionsPanel;
