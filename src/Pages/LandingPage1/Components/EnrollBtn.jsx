import "./EnrollBtn.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function EnrollBtn() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="button">
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => navigate("/enroll")}
      >
        {t("landingPage.categories.enrollNow")}
      </button>
    </div>
  );
}

export default EnrollBtn;
