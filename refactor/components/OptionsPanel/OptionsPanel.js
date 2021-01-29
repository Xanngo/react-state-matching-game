import React from 'react';

import Button from '../Button';
import TileSelector from '../TileSelector';

const OptionsPanel = ({ playing, numTiles, startGame, handleNumTileChange }) => (
  <div>
    <TileSelector />
    <Button />
  </div>
);

export default OptionsPanel;
