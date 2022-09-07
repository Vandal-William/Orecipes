import reducer, { initialState } from 'src/reducers/recipes';

describe('Recipes Reducer', () => {

  test('it should return initial state by default', () => {
    const newState = reducer();
    expect(newState).toBe(initialState); // toBe -> shallow comparaison ===
  });

  test('it should return a modified state for SAVE_RECIPES', () => {
    const currentState = {
      list: [],
      toto: 123,
      loading: true,
    }
    const action = {
      type: 'SAVE_RECIPES',
      recipes: [1,2,3],
    };
    const newState = reducer(currentState, action);
    expect(newState).toEqual({ // deep comparison - comparaison de chaque propriété
      list: [1,2,3],
      toto: 123,
      loading: false,
    });
  });

  test('it should not modify the state for other actions', () => {
    const currentState = {
      list: [],
      toto: 123,
    }
    const newState = reducer(currentState, { type: 'BIDON' });
    expect(newState).toEqual(currentState);
  });

});
