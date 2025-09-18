import "./AdminPanel.css";
import Navabar from "./Components/Navbar.jsx";
import ManageDetails from "./Components/ManageDetails.jsx";
import Footer from "../LandingPage/Components/Footer.jsx";

function AdminPanel() {
  return (
    <div className="AdminpanelContain">
      <Navabar />
      <ManageDetails />
      <Footer />
    </div>
  );
}

export default AdminPanel;
