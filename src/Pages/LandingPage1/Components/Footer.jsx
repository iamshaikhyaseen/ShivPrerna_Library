import "./Footer.css";
import Logo from "../../../assets/Lib_Logo_Main.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate(); // ✅ define navigate

  return (
    <div className="footer">
      <div className="subfoot">
        <a href="#" className="logo">
          <img
            src={Logo}
            className="FootLogoImg d-inline-block align-text-top"
            alt=""
          />
        </a>
        <h3>Shivprerna Library</h3>
        <p>Your trusted place for knowledge and community.</p>

        {/* ✅ button navigates to AdminLogin */}
        <button
          type="button"
          className="admin-btn"
          onClick={() => navigate("/adminlogin")}
        >
          Admin
        </button>

        <div className="details">
          <div className="contact-address">
            <div className="contact">
              <h4>Contact Us</h4>
              <p>
                Phone: 9226127316 <br /> Email: anspgranthalay@gmail.com
              </p>
            </div>

            <div className="address">
              <h4>Address</h4>
              <p>
                Room no 403, Navre residency, Navare Park Rd, near fire station,
                Narayan Nagar, west, Ambernath, Maharashtra 421505
              </p>
            </div>
          </div>

          <div className="join-us">
            <h4>Join us</h4>
            <a className="link">Facebook</a>
            <br />
            <a className="link">Whatsapp</a>
          </div>
        </div>

        <div className="comp">© 2025 YS Tech Solution Pvt Ltd</div>
      </div>
    </div>
  );
}

export default Footer;
