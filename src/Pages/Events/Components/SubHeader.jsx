import "./SubHeader.css";
import { useTranslation } from "react-i18next";

function SubHeader() {
  const { t } = useTranslation();

  return (
    <div className="SubHeader">
      <div className="title">
        <h1>{t("eventsPage.subHeader.header")}</h1>
      </div>
      <div className="SubTitle">
        <h6>
          {t("eventsPage.subHeader.subHeader")}
          <br />
          {t("eventsPage.subHeader.description")}
        </h6>
      </div>
    </div>
  );
}

export default SubHeader;
