import { combineReducers } from 'redux';
import getCharacterReducer from './getCharacterReducer';

export default combineReducers({
    getCharacter: getCharacterReducer
});