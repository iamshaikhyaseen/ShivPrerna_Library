import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    sessionStorage.removeItem("auth");
    navigate("/");
  };

  const handleHome = () => {
    navigate("/admin/dashboard");
  };

  return (
    <div className="Navbar">
      <div className="navbar-left">
        <button className="nav-btn home-btn" onClick={handleHome}>
          Home
        </button>
      </div>

      <h5 className="navbar-title">ADMIN PANEL</h5>

      <div className="navbar-right">
        <button className="nav-btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;