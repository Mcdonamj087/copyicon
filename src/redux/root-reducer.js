import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import symbolsReducer from './symbols/symbols.reducer';
import activeCategoryReducer from './active-category/active-category.reducer';
import activeFormatReducer from './active-format/active-format.reducer';
import searchValueReducer from './search-value/search-value.reducer';
import savedIconsReducer from './saved-icons/saved-icons.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['savedIcons'],
};

const rootReducer = combineReducers({
  symbols: symbolsReducer,
  activeCategory: activeCategoryReducer,
  activeFormat: activeFormatReducer,
  searchValue: searchValueReducer,
  savedIcons: savedIconsReducer,
});

export default persistReducer(persistConfig, rootReducer);
