import "./law.css";
import img1 from "../../../assets/S.R.-Ranganathan.jpg";
import { useTranslation } from "react-i18next";

function Law() {
  const { t } = useTranslation(); // Translation hook

  return (
    <div className="radial-container">
      {/* Avatar image of the author */}
      <div className="avatar">
        <img src={img1} alt={t("landingPage.laws.authorName")} />
      </div>

      {/* Laws displayed around the avatar */}
      <div className="laws">
        <span className="law">{t("landingPage.laws.law1")}</span>
        <span className="law">{t("landingPage.laws.law2")}</span>
        <span className="law">{t("landingPage.laws.law3")}</span>
        <span className="law">{t("landingPage.laws.law4")}</span>
        <span className="law">{t("landingPage.laws.law5")}</span>
        {/* Author note */}
        <p className="law">
          <b>{t("landingPage.laws.authorName")}</b>, {t("landingPage.laws.authorNote")}
        </p>
      </div>
    </div>
  );
}

export default Law;
