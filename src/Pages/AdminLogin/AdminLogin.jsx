import "./AdminLogin.css";
import Navbar from "../Management/Components/Navbar.jsx";
import LoginForm from "./Components/LoginForm.jsx";
import Footer from "../LandingPage1/Components/Footer.jsx";

function AdminLogin() {
  return (
    <div className="AdminLoginContain">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default AdminLogin;
