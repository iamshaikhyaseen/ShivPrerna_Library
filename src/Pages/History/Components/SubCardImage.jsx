import "./SubCardImage.css";
import Vision from "../../../assets/GovOfficer.png";
import { useTranslation } from "react-i18next";

function SubCardImage() {
  const { t } = useTranslation();

  // Array of indices for the cards in the translation file
  const cards = [1, 2]; // 0 is for the first minister card, 1 and 2 are these two

  return (
    <div className="SubCardImageContain">
      {cards.map((index) => (
        <div key={index} className="CardImage1">
          <div className="Historycard">
            <img
              src={Vision}
              className="cardimg card-img-top"
              alt={t(`historyPage.cards.${index}.header`)}
            />
            <div className="Historycard-body">
              <h4>{t(`historyPage.cards.${index}.header`)}</h4>
              <h6>{t(`historyPage.cards.${index}.subHeader`)}</h6>
              <p className="Historycard-text">
                {t(`historyPage.cards.${index}.description`)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubCardImage;
