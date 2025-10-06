import "./HeaderSection.css";
import { useTranslation } from "react-i18next";

function HeaderSection() {
  const { t } = useTranslation();

  return (
    <div className="HeaderSection">
      <h1>{t("historyPage.header.title")}</h1>
      <h6>{t("historyPage.header.subHeader")}</h6>
      <p>{t("historyPage.header.description")}</p>
    </div>
  );
}

export default HeaderSection;
