import { combineReducers } from 'redux';

import symbolsReducer from './symbols/symbols.reducer';
import activeCategoryReducer from './active-category/active-category.reducer';
import activeFormatReducer from './active-format/active-format.reducer';
import searchValueReducer from './search-value/search-value.reducer';

export default combineReducers({
  symbols: symbolsReducer,
  activeCategory: activeCategoryReducer,
  activeFormat: activeFormatReducer,
  searchValue: searchValueReducer,
});
