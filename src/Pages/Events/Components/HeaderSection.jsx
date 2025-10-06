import "./HeaderSection.css";
import { useTranslation } from "react-i18next";

function HeaderSection() {
  const { t } = useTranslation();

  return (
    <div className="HeaderSection">
      <h1>{t("eventsPage.headerSection.header")}</h1>
      <h6>{t("eventsPage.headerSection.subHeader")}</h6>
      <p>{t("eventsPage.headerSection.description")}</p>
    </div>
  );
}

export default HeaderSection;
