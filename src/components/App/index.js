import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';
import Fav from 'src/components/Fav';
import Loading from './Loading';
import { fetchRecipes } from '../../actions/recipes';
import useScrollTop from '../../hooks/useScrollTop';
import './style.scss';

function App() {
  // à chaque changement de page je remet le défilement de la page en haut.
  useScrollTop();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.recipes.loading);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
