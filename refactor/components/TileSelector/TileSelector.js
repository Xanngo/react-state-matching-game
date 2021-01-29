import React, { useContext } from 'react';
import './TileSelector.css';
import useHover from '../../hooks';
import GameContext from '../../GameContext';

const TileSelectorComponent = ({ numTiles, handleNumTileChange }) => {
  const [ref, hovered] = useHover();

  const dropdown = (
    <div className='tileSelectorContent'>
      <div className='number' onClick={() => handleNumTileChange(4)}>
        4
      </div>
      <div className='number' onClick={() => handleNumTileChange(16)}>
        16
      </div>
      <div className='number' onClick={() => handleNumTileChange(36)}>
        36
      </div>
    </div>
  );

  return (
    <div className='tileSelector'>
      <div>Number of Tiles</div>
      <div ref={ref} className='tileSelectorDropdown'>
        {numTiles}
        {hovered ? dropdown : null}
      </div>
    </div>
  );
};

const TileSelector = (props) => (
  <GameContext.Consumer>
    {({ numTiles, handleNumTileChange }) => (
      <TileSelectorComponent {...props} numTiles={numTiles} handleNumTileChange={handleNumTileChange} />
    )}
  </GameContext.Consumer>
);

export default TileSelector;
