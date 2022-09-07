// Tester l'action creator saveRecipes de src/actions/recipes 
import { saveRecipes } from 'src/actions/recipes';

// vérifier qu'il retourne un objet action du bon type, contenant les infos reçues en paramètre
describe('saveRecipes', () => {

  test('should return an action object', () => {
    
    const action = saveRecipes(123);
    expect(action).toEqual({
      type: 'SAVE_RECIPES',
      recipes: 123,
    });

  });

});
