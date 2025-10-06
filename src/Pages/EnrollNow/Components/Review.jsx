import "./Review.css";
import R1 from "../../../assets/EnrollNow/Review1.png";
import R2 from "../../../assets/EnrollNow/Review2.png";
import R3 from "../../../assets/EnrollNow/Review3.png";
import R4 from "../../../assets/EnrollNow/Review4.png";
import { useTranslation } from "react-i18next";

function Review() {
  const { t } = useTranslation();

  const reviews = t("enrollNowPage.reviews", { returnObjects: true });
  const tagLine = t("enrollNowPage.tagLine.title");

  // Array of review images
  const reviewImages = [R4, R2, R3, R1];

  return (
    <div className="MainConatin">
      <div className="OuterTag">
        <div className="Tag">
          <h3>{t("enrollNowPage.subHeader.title")}</h3>
        </div>
      </div>

      <div className="ReviewContain">
        {reviews.map((review, idx) => (
          <div className="card" key={idx}>
            <img
              src={reviewImages[idx]} // Different image for each review
              className="card-img-top"
              alt={`ReviewImage-${idx + 1}`}
            />
            <div className="EnrollCard-body">
              <div className="EnrollCard-text">
                <h5>{review.feedback}</h5>
                <p>{review.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="OuterMsg">
        <div className="message">
          <h3>{tagLine}</h3>
        </div>
      </div>
    </div>
  );
}

export default Review;
