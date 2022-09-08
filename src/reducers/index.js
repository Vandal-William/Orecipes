import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import userReducer from './user';
import favoritesReducer from './fav';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
