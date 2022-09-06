import axios from 'axios';

const api = (store) => (next) => (action) => {
  if (action.type === 'FETCH_RECIPES') {
    const { list } = store.getState();
    axios.get('http://localhost:3001/recipes', {
      data: list,
    })
      .then((response) => {
        // en cas de réussite de la requête
        store.dispatch({
          type: 'SAVE_DATA',
          list: response.data,
        });
      });
  }
  next(action);
};
export default api;
