import "./EnrollBtn.css";
import { useNavigate } from "react-router-dom";

function EnrollBtn() {
  const navigate = useNavigate();

  return (
    <div className="button">
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => navigate("/enroll")}
      >
        Enroll Now
      </button>
    </div>
  );
}

export default EnrollBtn;
