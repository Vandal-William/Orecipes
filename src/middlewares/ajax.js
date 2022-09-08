import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from '../actions/recipes';

// eslint-disable-next-line no-unused-vars
let token;

const api = (store) => (next) => (action) => {
  if (action.type === FETCH_RECIPES) {
    axios.get('http://localhost:3001/recipes')
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
    axios.post('http://localhost:3001/login', {
      email: state.user.email,
      password: state.user.password,
    })
      .then((response) => {
        token = response.data.token;
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
    axios.get('http://localhost:3001/favorites', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
  next(action);
};
export default api;
