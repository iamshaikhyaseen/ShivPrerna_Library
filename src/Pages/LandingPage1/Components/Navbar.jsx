import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger and close icon
import Logo from "../../../assets/Lib_Logo_Main.png";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bgi">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link className="home" to="/">
              <img
                src={Logo}
                className="LogoImg d-inline-block align-text-top"
                alt=""
              />
              
              Shivprerna Library

            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

          {/* Links */}
          <div className={`links-centre ${isOpen ? "active" : ""}`}>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive ? "nav-links active-link" : "nav-links"
              }
              onClick={() => setIsOpen(false)}
            >
              History
            </NavLink>

            <NavLink
              to="/all_books"
              className={({ isActive }) =>
                isActive ? "nav-links active-link" : "nav-links"
              }
              onClick={() => setIsOpen(false)}
            >
              All_Books
            </NavLink>

            <NavLink
              to="/rare_books"
              className={({ isActive }) =>
                isActive ? "nav-links active-link" : "nav-links"
              }
              onClick={() => setIsOpen(false)}
            >
              Rare_Books
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "nav-links active-link" : "nav-links"
              }
              onClick={() => setIsOpen(false)}
            >
              Events
            </NavLink>

            <NavLink
              to="/management"
              className={({ isActive }) =>
                isActive ? "nav-links active-link" : "nav-links"
              }
              onClick={() => setIsOpen(false)}
            >
              Management
            </NavLink>
          </div>

          <div className="link-lang">
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
      </nav>
    </div>
  );
}

export default MainNav;
