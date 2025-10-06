import "./CardImage.css";
import Ministor from "../../../assets/History/Ministor.png";
import { useTranslation } from "react-i18next";

function CardImage() {
  const { t } = useTranslation();

  return (
    <div className="MainCardImage">
      <div className="CardImage1">
        <div className="Historycard">
          <img
            src={Ministor}
            className="cardimg card-img-top"
            alt={t("historyPage.cards.0.header")}
          />
          <div className="Historycard-body">
            <h4 className="mb-2">{t("historyPage.cards.0.header")}</h4>
            <h6 className="mb-1">{t("historyPage.cards.0.subHeader")}</h6>
            <p className="card-text mt-1">
              {t("historyPage.cards.0.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardImage;
