import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './style.scss';

function Menu() {
  const recipes = useSelector((state) => state.recipes.list);
  console.log(recipes);
  return (
    <nav className="menu">
      <NavLink
        to="/"
        className="menu-link menu-link--active"
      >
        Accueil
      </NavLink>
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className="menu-link"
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
