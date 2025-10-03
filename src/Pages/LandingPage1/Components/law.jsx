import "./law.css";
import img1 from "../../../assets/S.R.-Ranganathan.jpg";
import { useTranslation } from "react-i18next";

function Law() {
  const { t } = useTranslation();

  return (
    <div className="radial-container">
      <div className="avatar">
        <img src={img1} alt={t("landingPage.laws.authorName")} />
      </div>

      <div className="laws">
        <span className="law">{t("landingPage.laws.law1")}</span>
        <span className="law">{t("landingPage.laws.law2")}</span>
        <span className="law">{t("landingPage.laws.law3")}</span>
        <span className="law">{t("landingPage.laws.law4")}</span>
        <span className="law">{t("landingPage.laws.law5")}</span>
        <p className="law">
          <b>{t("landingPage.laws.authorName")}</b>, {t("landingPage.laws.authorNote")}
        </p>
      </div>
    </div>
  );
}

export default Law;
