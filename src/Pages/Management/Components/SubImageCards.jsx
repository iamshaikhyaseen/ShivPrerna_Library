import "./SubImageCards.css";
import G3 from "../../../assets/LibraryReceptionist.png";
import G4 from "../../../assets/LibraryMember.png";
import G5 from "../../../assets/Libraryhelper.png";


function SubImageCards() {
  return (
    <div className="SubImageCards">
      {/* First Card */}
      <div className="ManagementCard">
        <div className="GovImg">
          <img src={G3} className="card-img-top" alt="Receptionist" />
        </div>
        <div className="card-body">
          <h5> Ms. Anjali Patel</h5>
          <p className="card-text">Receptionist</p>
        </div>
      </div>
      {/* Second Card */}
      <div className="ManagementCard">
        <div className="GovImg">
          <img src={G4} className="card-img-top" alt="Member" />
        </div>
        <div className="card-body">
          <h5> Shri Mohan Das</h5>
          <p className="card-text">Member</p>
        </div>
      </div>
      {/* Third Card */}
      <div className="ManagementCard">
        <div className="GovImg">
          <img src={G5} className="card-img-top" alt="Helper" />
        </div>
        <div className="card-body">
          <h5> Mr. Arjun Verma</h5>
          <p className="card-text">Helper</p>
        </div>
      </div>
    </div>
  );
}

export default SubImageCards;
