import { SAVE_RECIPES } from '../actions/recipes';

export const initialState = {
  list: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.recipes,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
