const INITIAL_STATE = '';

const searchValueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_VALUE':
      return action.payload;
    default:
      return state;
  }
};

export default searchValueReducer;
