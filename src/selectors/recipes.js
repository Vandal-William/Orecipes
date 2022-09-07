/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} recipes - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findRecipe(recipes, searchedSlug) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}

export function getTextByRecipesNumber(recipes = []) {
  let text;
  switch (recipes.length) {
    case 0:
      text = 'Découvrez prochainement nos recettes !';
      break;
    case 1:
      text = 'Dégustez notre recette la plus savoureuse.';
      break;
    default:
      text = 'Choisissez parmi nos recettes ce qui vous fait envie.';
      break;
  }
  return text;
}
