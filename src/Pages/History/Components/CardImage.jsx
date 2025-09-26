import "./CardImage.css";
import Ministor from "../../../assets/History/Ministor.png";

function CardImage() {
  return (
    <div className="MainCardImage">
      <div className="CardImage1">
        <div className="Historycard">
          <img src={Ministor} className="cardimg card-img-top" alt="Ministor" />
          <div className="card-body">
            <h4>Hon. Dr. Shrikant Eknath Shinde </h4>
            <h6>Member of Parliament</h6>
            <p className="card-text">
              "We are deeply grateful to the Honorable Minister, whose generous
              contribution of ₹80 lakhs and unwavering support played a vital
              role in the establishment of our library. His vision and
              encouragement continue to inspire our mission of spreading
              knowledge and learning."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardImage;
