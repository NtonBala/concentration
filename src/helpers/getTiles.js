import v4 from 'uuid/v4';
import randomColor from 'randomcolor';
import {times} from 'lodash/util';

const getPairs = (count) => {
    const colors = randomColor({
        count
    });

    return times(count, () => {
        const pairId = v4();
        const color = colors.splice(0, 1)[0];
        const removed = false;

        return {
            id: pairId,
            color,
            tiles: [
                {
                    id: v4(),
                    pairId,
                    color,
                    removed
                },
                {
                    id: v4(),
                    pairId,
                    color,
                    removed
                }
            ]
        };
    });
};

//use modern version of Fisher-Yates shuffle algorythm with ES5 syntax
//as ES6 destructuring elements syntax causes significant performance loss,
//as of October 2017
function shuffle(array) {
    var j, x, i;
    for (i = array.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

const getTiles = (count = 8) => {
    //first form array of pairs of tiles
    const pairs = getPairs(count);
    //then form array of tiles
    const tiles = pairs.reduce((acc, pair) => [...acc, ...pair.tiles], []);
    //finally, shuffle the array of tiles
    return shuffle(tiles);
};

export default getTiles;
