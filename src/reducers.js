import { combineReducers } from 'redux';
import { reducer as scenesReducer } from './Scenes/reducer';

export const rootReducer = combineReducers({
  Scenes: scenesReducer,
});
