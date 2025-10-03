import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger and close icons
import Logo from "../../../assets/Lib_Logo_Main.png";
import { useTranslation } from "react-i18next";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="bgi">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link className="home" to="/">
              <img
                src={Logo}
                className="LogoImg d-inline-block align-text-top"
                alt="Logo"
              />
              {t("landingPage.navbar.title")}
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
              {t("landingPage.navbar.history")}
            </NavLink>

            <NavLink
              to="/all_books"
              className={({ isActive }) =>
                isActive ? "nav-links active-link" : "nav-links"
              }
              onClick={() => setIsOpen(false)}
            >
              {t("landingPage.navbar.allBooks")}
            </NavLink>

            <NavLink
              to="/rare_books"
              className={({ isActive }) =>
                isActive ? "nav-links active-link" : "nav-links"
              }
              onClick={() => setIsOpen(false)}
            >
              {t("landingPage.navbar.rareBooks")}
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "nav-links active-link" : "nav-links"
              }
              onClick={() => setIsOpen(false)}
            >
              {t("landingPage.navbar.events")}
            </NavLink>

            <NavLink
              to="/management"
              className={({ isActive }) =>
                isActive ? "nav-links active-link" : "nav-links"
              }
              onClick={() => setIsOpen(false)}
            >
              {t("landingPage.navbar.management")}
            </NavLink>
          </div>

          {/* Language Dropdown */}
          <div className="link-lang">
            <select
              className="dropdown"
              value={i18n.language}
              onChange={handleLanguageChange}
            >
              <option className="option" value="en">
                English
              </option>
              <option className="option" value="mr">
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
