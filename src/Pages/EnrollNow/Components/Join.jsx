import "./Join.css";
import img1 from "../../../assets/EnrollNow/IdCard.jpg";
import img2 from "../../../assets/EnrollNow/BookReading.webp";

function Join() {
  return (
    <div className="MainContainer">
      <div className="IdCard">
        <div className="details1">
          <h3>Getting started is simple!</h3>
          <p>
            1. Just visit the library request your Library ID Card. <br />
            2. Membership comes with a daily fee of only ₹10. <br/>
            Note: Monday-Sunday 9.30Am to 9.00Pm
          </p>
        </div>
        <div>
          <img src={img1} className="Eimg img" alt="IdCard" />
        </div>
      </div>

      <div className="Rental">
        <div>
          <img src={img2} className="Eimg img" alt="BookReading" />
        </div>
        <div className="details2">
            <h3>Book Rent Charges!</h3>
            <p>Monthly Plan: ₹100 per Month<br /> Yearly Plan: ₹1000 per year <br />
            Note: Monday-Sunday 9.30Am to 9.00Pm</p>
            <p>Security Deposit: ₹500 (a standard registration charge)</p>
        </div>
      </div>
    </div>
  );
}

export default Join;
