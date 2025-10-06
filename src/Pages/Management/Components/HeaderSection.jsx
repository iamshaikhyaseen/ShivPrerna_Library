import "./HeaderSection.css";
import { useTranslation } from "react-i18next";

function HeaderSection() {
  const { t } = useTranslation();

  return (
    <div className="HeaderSection">
      {/* Split with line break if translation contains \n */}
      <h1>
        {t("managementPage.headerSection.header")
          .split("\n")
          .map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
      </h1>
      <p>{t("managementPage.headerSection.description")}</p>
    </div>
  );
}

export default HeaderSection;
