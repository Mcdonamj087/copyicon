import { combineReducers } from 'redux';

import symbolsReducer from './symbols/symbols.reducer';
import activeCategoryReducer from './active-category/active-category.reducer';

export default combineReducers({
  symbols: symbolsReducer,
  activeCategory: activeCategoryReducer,
});
