import React from "react";

import "./Tile.css";

const Tile = (tile) => {
  const colorStyle =
    tile.matched || tile.selected ? { backgroundColor: tile.color } : null;

  return (
    <div
      className="Tile"
      style={colorStyle}
      onClick={() => tile.handleTileClicked(tile.id, tile.color)}
    >
      {(tile.matched || tile.selected) && <tile.svg />}
    </div>
  );
};

export default Tile;
