import React from 'react';

const Main = () => (
    <div>
        <h1>Concentration Game</h1>
        <div>
            <p>
                The gameplay provides a board of tiles (4*4). Every 2 tiles
                have the same color. In each round player selects 2 tiles.
                The goal is to select two tiles with the same color to
                remove them from the board. If player selects 2 tiles with
                different colors then tiles are flipped and the player
                proceeds with the next round. The game is considered to be over
                when all tiles are removed from the board.
            </p>
        </div>
    </div>
);

export default Main;
