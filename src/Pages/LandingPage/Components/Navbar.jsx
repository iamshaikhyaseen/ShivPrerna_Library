import "./Navbar.css";
import logo from "../../../assets/LOGO.png";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div className="bgi">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link className="home" to="/">
              <img
                src={logo}
                width="25%"
                height="25%"
                className="d-inline-block align-text-top"
              />
              Shivprerna Library
            </Link>
          </div>

          <div className="links-centre">
            <Link className="nav-links" to="#history">
              History
            </Link>
            <Link className="nav-links" to="#all_books">
              All_Books
            </Link>
            <Link className="nav-links" to="#rare_books">
              Rare_Books
            </Link>
            <Link className="nav-links" to="#events">
              Events
            </Link>
            <Link className="nav-links" to="#management">
              Management
            </Link>
          </div>

          <div className="link-lang">
            <div>
              <select className="dropdown">
                <option className="option" value="English">
                  English
                </option>
                <option className="option" value="मराठी">
                  मराठी
                </option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
