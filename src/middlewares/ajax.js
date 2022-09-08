import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from '../actions/recipes';

// eslint-disable-next-line no-unused-vars
let token;
const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const api = (store) => (next) => (action) => {
  if (action.type === FETCH_RECIPES) {
    instance.get('/recipes')
      .then((response) => {
        store.dispatch(saveRecipes(response.data));
      })
      .catch((error) => {
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  }
  else if (action.type === 'LOGIN') {
    const state = store.getState();
    instance.post('/login', {
      email: state.user.email,
      password: state.user.password,
    })
      .then((response) => {
        // on altère notre confiig par défaut pour ajouter le token en entete
        // ainsi toutes les requetes qui partiront après le login auront cette entete ...
        instance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        store.dispatch({
          type: 'SAVE_USER',
          pseudo: response.data.pseudo,
        });
      })
      .catch((error) => {
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  }
  // route pour accéder aux favories d'un utilisateur
  else if (action.type === 'FETCH_FAV') {
    instance.get('/favorites')
      .then((response) => {
        store.dispatch({
          type: 'SAVE_FAV',
          recipes: response.data.favorites,
        });
      })
      .catch((error) => {
        // en cas d’échec de la requête
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  }
  else if (action.type === 'LOGOUT') {
    // j'oublie mon token au logout
    instance.defaults.headers.common.Authorization = undefined;
  }
  next(action);
};
export default api;
