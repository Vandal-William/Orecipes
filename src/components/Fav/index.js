import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Fav() {
  const isLogged = useSelector((state) => state.user.logged);

  const favorites = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'FETCH_FAV',
    });
  }, []);

  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <Page>
      <AppHeader />
      <Content
        title="Reccettes préférées"
        text="Retrouvez ci-dessous vos recettes préférées."
        recipes={favorites}
      />
    </Page>
  );
}

export default Fav;
