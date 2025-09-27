import "./Footer.css";

function Navbar() {
  return (
    <div className="footer">
      <div className="subfoot">
        <a href="#" className="logo">
          Logo
        </a>
        <h3>Shivprerna Library</h3>
        <p>Your trusted place for knowledge and community.</p>
        <button className="admin-btn">Admin</button>
        <div className="details">
          <div className="contact-address">
            <div className="contact">
              <h4>Contact Us</h4>
              <p>
                Phone: 9226127316 <br /> Email:anspgranthalay@gmail.com
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
export default Navbar;
