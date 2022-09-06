import './style.scss';
import logo from '../../assets/images/logo.png';

function AppHeader() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
    </header>
  );
}

export default AppHeader;
