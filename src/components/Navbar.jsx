import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";
function Navbar() {
  return (
    <>
      <div className="navbar-blur-overlay" aria-hidden="true"></div>
      <nav aria-label="주요 메뉴" className="navbar title-font">
        <ul>
          <li>
            {/* 현재 URL과 일치하면 자동으로 active 클래스와 aria-current="page"가 붙음 */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li role="none" aria-hidden="true">
            |
          </li>
          <li>
            <NavLink to="/photos">Photos</NavLink>
          </li>
          <li role="none" aria-hidden="true">
            |
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
