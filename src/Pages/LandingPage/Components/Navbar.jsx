import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger and close icon

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bgi">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link className="home" to="/">
              <img
                src={".."}
                width="25%"
                height="25%"
                className="d-inline-block align-text-top"
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
            <Link className="nav-links" to="#history" onClick={() => setIsOpen(false)}>
              History
            </Link>
            <Link className="nav-links" to="#all_books" onClick={() => setIsOpen(false)}>
              All_Books
            </Link>
            <Link className="nav-links" to="#rare_books" onClick={() => setIsOpen(false)}>
              Rare_Books
            </Link>
            <Link className="nav-links" to="#events" onClick={() => setIsOpen(false)}>
              Events
            </Link>
            <Link className="nav-links" to="#management" onClick={() => setIsOpen(false)}>
              Management
            </Link>
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
