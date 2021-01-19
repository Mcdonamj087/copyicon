import { combineReducers } from 'redux';

import symbolsReducer from './symbols/symbols.reducer';
import activeCategoryReducer from './active-category/active-category.reducer';
import activeFormatReducer from './active-format/active-format.reducer';

export default combineReducers({
  symbols: symbolsReducer,
  activeCategory: activeCategoryReducer,
  activeFormat: activeFormatReducer,
});
