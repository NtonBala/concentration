import React from 'react';
import PropTypes from 'prop-types';

const Front = ({color}) => (
    <div
        className='front tile'
        style={{backgroundColor: color}}
    />
);
Front.propTypes = {
    color: PropTypes.string
};

const Back = () => (
    <div className='back tile'/>
);

const Tile = ({color, opened, unclickable, removed, flip}) => (
    <li
        className={'tile-container' +
        (unclickable ? ' unclickable' : '') +
        (removed ? ' removed' : '')}
        onClick={flip}
    >
        <div className={'tile' + (opened ? ' opened' : '')}>
            <Front color={color}/>
            <Back/>
        </div>
    </li>
);

Tile.propTypes = {
    color: PropTypes.string.isRequired,
    opened: PropTypes.bool.isRequired,
    unclickable: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
    flip: PropTypes.func.isRequired,
};

export default Tile;
