// j'importe l'unité à tester
import { findRecipe, getTextByRecipesNumber } from "../../src/selectors/recipes";
import data from 'src/data';

// pour m'organiser je peux nommer un chapitre avec describe
describe('findRecipe', () => {


  // on délimite un premier test pour vérifier que ça fait ce qu'on attend
  test('it should return the good recipe for a given slug', () => {
    // on fait l'assertion : on va executer la fonction et comparer le résultat produit à nos attentes
    // si ça correspond le test passera, sinon il échouera
    expect(findRecipe(data, data[0].slug)).toBe(data[0]);
  });
  // vérifie qu'il retourne undefined si on passe un slug bidon
  test('it should return undefined for an unknown slug', () => {
    expect(findRecipe(data, 'truc-much')).toBeUndefined();
  });
  // vérifie qu'il retourne undefined si la liste des recettes est vide
  test('it should return undefined for an empty list of recipes', () => {
    expect(findRecipe([], 'crepes-rafinees')).toBeUndefined();
  });

});

/* 
Besoin :

On veut un texte dynammique sur l'accueil en fonction du nombre de recette qui sera amené à évoluer en fonction de ce qu'on renvoie dans l'api

Si 0 recette : `Découvrez prochainement nos recettes !`
Si 1 recette : `Dégustez notre recette la plus savoureuse.`
Si plusieurs recettes : `Choisissez parmi nos recettes ce qui vous fait envie.`

*/

describe('getTextByRecipesNumber', () => {

  test('should return default text for 0 recipe or nothing', () => {
    const text = getTextByRecipesNumber();
    expect(text).toBe('Découvrez prochainement nos recettes !');
  });

  test('should return a specific text for 1 recipe', () => {
    const text = getTextByRecipesNumber(['une recette']);
    expect(text).toBe('Dégustez notre recette la plus savoureuse.');
  });

  test('should return another text for several recipes', () => {
    const text = getTextByRecipesNumber(['une recette', 'une autre']);
    expect(text).toBe('Choisissez parmi nos recettes ce qui vous fait envie.');
  });
  
});

