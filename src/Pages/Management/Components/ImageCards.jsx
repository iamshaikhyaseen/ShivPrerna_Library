import "./ImageCards.css";
import G1 from "../../../assets/GovOfficer.png";
import G2 from "../../../assets/Libraryhead.png";
import SubImageCards from "./SubImageCards.jsx";

function ImageCards() {
  return (
    <div>
      {/* First Tow */}
      <div className="MainCard">
        <div className="ManagementCard">
          <div className="GovImg">
            <img src={G1} className="card-img-top" alt="Officer" />
          </div>
          <div className="card-body">
            <h5> Shri Rajesh Kulkarni</h5>
            <p className="Managementcard-text">Government Officer</p>
          </div>
        </div>
        <div className="Details">
          <p>
            “We sincerely thank our management for their constant support and
            guidance in running the library smoothly. Their valuable
            contribution and commitment play a vital role in creating a
            welcoming space for readers and learners.”
          </p>
        </div>
      </div>
      {/* Second Row  */}
      <div className="SecondRow">
        <div className="MainCard">
          <div className="ManagementCard">
            <div className="GovImg">
              <img src={G2} className="card-img-top" alt="Officer" />
            </div>
            <div className="card-body">
              <h5> Smt. Meenakshi Sen</h5>
              <p className="Managementcard-text">Chief Librarian</p>
            </div>
          </div>
        </div>
      </div>
      {/* Third */}
      <div className="ThirdRow">
        <SubImageCards />
      </div>
    </div>
  );
}

export default ImageCards;
