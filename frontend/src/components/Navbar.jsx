import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        User Graph
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/">그래프</NavLink>
        <NavLink to="/users">사용자 목록</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
