import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from '../actions/recipes';

const api = (store) => (next) => (action) => {
  if (action.type === FETCH_RECIPES) {
    axios.get('http://localhost:3001/recipes')
      .then((response) => {
        // en cas de réussite de la requête
        store.dispatch(saveRecipes(response.data));
      })
      .catch((error) => {
        // en cas d’échec de la requête
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  }
  next(action);
};
export default api;
