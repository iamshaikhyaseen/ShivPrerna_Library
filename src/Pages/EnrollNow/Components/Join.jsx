import "./Join.css";
import img1 from "../../../assets/EnrollNow/IdCard.jpg";
import img2 from "../../../assets/EnrollNow/BookReading.webp";
import { useTranslation } from "react-i18next";

function Join() {
  const { t } = useTranslation();
  const details = t("enrollNowPage.details", { returnObjects: true });

  return (
    <div className="MainContainer">
      <div className="IdCard">
        <div className="details1">
          <h3>{details[0].header}</h3>
          <p>
            {details[0].description.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <img src={img1} className="Eimg img" alt="IdCard" />
        </div>
      </div>

      <div className="Rental">
        <div>
          <img src={img2} className="Eimg img" alt="BookReading" />
        </div>
        <div className="details2">
          <h3>{details[1].header}</h3>
          <p>
            {details[1].description.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Join;
