import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './style.scss';

function Menu() {
  const recipes = useSelector((state) => state.recipes.list);
  // eslint-disable-next-line no-confusing-arrow
  const checkIsActive = ({ isActive }) => isActive ? 'menu-link menu-link--active' : 'menu-link';
  return (
    <nav className="menu">
      <NavLink
        to="/"
        className={checkIsActive}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/fav"
        className={checkIsActive}
      >
        Recettes préférées
      </NavLink>
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className={checkIsActive}
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
