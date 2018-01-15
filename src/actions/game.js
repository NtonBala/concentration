import * as types from './types';

export const togglePause = () => ({
    type: types.TOGGLE_PAUSE
});

export const flippTile = (payload) => ({
    type: types.FLIPP_TILE,
    payload
});

export const roundPassed = (payload) => ({
    type: types.ROUND_PASSED,
    payload
});

export const roundFailed = () => ({
    type: types.ROUND_FAILED
});
