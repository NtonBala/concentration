import {assign} from 'lodash/object';

//encapsulate the idea of object immutable update to ensure immutability
export default (oldObj, newValues) => assign({}, oldObj, newValues);
