export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_DATA':
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
