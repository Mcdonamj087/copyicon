const INITIAL_STATE = [];

const maxSavedIcons = 10;

const savedIconsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_SAVED_ICONS_LIST':
      // Reduce state (saved icons object) into an array of html codes
      // to compare against the payload htmlCode. Only push the new icon
      // into state if there is not a match.
      const newState = state
        .reduce((acc, icon) => acc.concat(icon.htmlCode), [])
        .includes(action.payload.htmlCode)
        ? state
        : [action.payload, ...state];

      console.log(newState);

      if (newState.length === maxSavedIcons + 1) {
        return newState.slice(0, newState.length - 1);
      } else {
        return newState;
      }

    default:
      return state;
  }
};

export default savedIconsReducer;
