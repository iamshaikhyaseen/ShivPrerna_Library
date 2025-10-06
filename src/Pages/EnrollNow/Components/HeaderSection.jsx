import "./HeaderSection.css";
import { useTranslation } from "react-i18next";

function HeaderSection() {
  const { t } = useTranslation();

  return (
    <div className="HeaderSection">
      <h1>{t("enrollNowPage.headerSection.header")}</h1>
      <p>{t("enrollNowPage.headerSection.description")}</p>
    </div>
  );
}

export default HeaderSection;
