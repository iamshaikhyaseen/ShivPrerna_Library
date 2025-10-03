import "./SubImageCards.css"; 
import G3 from "../../../assets/LibraryReceptionist.png";
import G4 from "../../../assets/LibraryMember.png";
import G5 from "../../../assets/Libraryhelper.png";
import { useTranslation } from "react-i18next";

function SubImageCards() {
  const { t } = useTranslation();

  return (
    <div className="SubImageCards">
      {/* First Card */}
      <div className="ManagementCard">
        <div className="GovImg">
          <img src={G3} className="card-img-top" alt="Receptionist" />
        </div>
        <div className="card-body">
          <h5>{t("managementPage.cards.2.name")}</h5>
          <p className="Managementcard-text">
            {t("managementPage.cards.2.designation")}
          </p>
        </div>
      </div>

      {/* Second Card */}
      <div className="ManagementCard">
        <div className="GovImg">
          <img src={G4} className="card-img-top" alt="Member" />
        </div>
        <div className="card-body">
          <h5>{t("managementPage.cards.3.name")}</h5>
          <p className="Managementcard-text">
            {t("managementPage.cards.3.designation")}
          </p>
        </div>
      </div>

      {/* Third Card */}
      <div className="ManagementCard">
        <div className="GovImg">
          <img src={G5} className="card-img-top" alt="Helper" />
        </div>
        <div className="card-body">
          <h5>{t("managementPage.subHeader.name")}</h5>
          <p className="Managementcard-text">
            {t("managementPage.subHeader.designation")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubImageCards;
