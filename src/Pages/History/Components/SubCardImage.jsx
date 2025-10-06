import "./SubCardImage.css";
import Vision from "../../../assets/GovOfficer.png";
import Guest from "../../../assets/History/Guest.png";
import { useTranslation } from "react-i18next";

function SubCardImage() {
  const { t } = useTranslation();

  // Define cards with specific images
  const cards = [
    { id: 1, img: Vision },
    { id: 2, img: Guest },
  ];

  return (
    <div className="SubCardImageContain">
      {cards.map((card) => (
        <div key={card.id} className="CardImage1">
          <div className="Historycard">
            <img
              src={card.img}
              className="cardimg card-img-top"
              alt={t(`historyPage.cards.${card.id}.header`)}
            />
            <div className="Historycard-body">
              <h4>{t(`historyPage.cards.${card.id}.header`)}</h4>
              <h6>{t(`historyPage.cards.${card.id}.subHeader`)}</h6>
              <p className="Historycard-text">
                {t(`historyPage.cards.${card.id}.description`)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubCardImage;
