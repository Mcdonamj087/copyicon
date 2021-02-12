const INITIAL_STATE = 'Raw';

const activeFormatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_FORMAT':
      return action.payload;
    default:
      return state;
  }
};

export default activeFormatReducer;
