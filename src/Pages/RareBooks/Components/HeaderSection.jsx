import "./HeaderSection.css";
import { useTranslation } from "react-i18next";

function HeaderSection() {
  const { t } = useTranslation();

  return (
    <div className="HeaderSection">
      <h1>{t("rareBooksPage.title")}</h1>
      <p>{t("rareBooksPage.description")}</p>
    </div>
  );
}

export default HeaderSection;
