const INITIAL_STATE = 'all';

const activeCategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_CATEGORY':
      return action.payload;
    default:
      return state;
  }
};

export default activeCategoryReducer;
