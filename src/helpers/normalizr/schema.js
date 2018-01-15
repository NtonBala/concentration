import {schema} from 'normalizr';

//create schema for tile object
const tileSchema = new schema.Entity('tiles');
//schema for array of tiles objects
export const arrayOfTiles = new schema.Array(tileSchema);
