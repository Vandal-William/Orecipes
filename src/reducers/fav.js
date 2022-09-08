const initialState = {
  list: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGOUT':
      return {
        ...state,
        list: [],
      };
    case 'SAVE_FAV':
      return {
        ...state,
        list: action.recipes,
      };
    default:
      return state;
  }
}

export default reducer;
