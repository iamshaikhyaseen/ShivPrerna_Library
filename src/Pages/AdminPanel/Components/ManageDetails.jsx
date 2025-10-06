import "./ManageDetails.css";
import { useNavigate } from "react-router-dom";

function ManageDetails() {
  const navigate = useNavigate();

  const goToBooks = () => {
    navigate("/admin/adminbook");
  };

  const goToMembers = () => {
    navigate("/admin/adminmember");
  };

  return (
    <div className="ManageDetailsContain">
      <div className="ManageDetails">
        <h4>Manage Details</h4>
        <p className="manage-link" onClick={goToBooks}>
          Books
        </p>
        <p className="manage-link" onClick={goToMembers}>
          Members
        </p>
      </div>
    </div>
  );
}

export default ManageDetails;