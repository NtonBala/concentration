import React from 'react';
import PropTypes from 'prop-types';

const Options = ({children, newGame}) => (
    <div>
        {children}
        <button onClick={newGame}>Start New Game</button>
    </div>
);

Options.propTypes = {
    children: PropTypes.element,
    newGame: PropTypes.func
};

export default Options;
