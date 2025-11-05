import "./ImageCards.css";
import G2 from "../../../assets/Libraryhead.png";
import SubImageCards from "./SubImageCards.jsx";
import { useTranslation } from "react-i18next";

function ImageCards() {
  const { t } = useTranslation();

  return (
    <div>
      {/* First Row */}
      <div className="MainCard">
        <div className="ManagementCard">
          <div className="GovImg">
            <img src={G2} className="card-img-top" alt="Officer" />
          </div>
          <div className="card-body">
            <h5>{t("managementPage.cards.0.name")}</h5>
            <p className="Managementcard-text">
              {t("managementPage.cards.0.designation")}
            </p>
          </div>
        </div>
        <div className="Details">
          <p>{t("managementPage.cards.0.description")}</p>
        </div>
      </div>

      {/* Second Row */}
      {/* <div className="SecondRow">
        <div className="MainCard">
          <div className="ManagementCard">
            <div className="GovImg">
              <img src={G2} className="card-img-top" alt="Officer" />
            </div>
            <div className="card-body">
              <h5>{t("managementPage.cards.1.name")}</h5>
              <p className="Managementcard-text">
                {t("managementPage.cards.1.designation")}
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Third Row */}
      <div className="ThirdRow">
        <SubImageCards />
      </div>
    </div>
  );
}

export default ImageCards;
