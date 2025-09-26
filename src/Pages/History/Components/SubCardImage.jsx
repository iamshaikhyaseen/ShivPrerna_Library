import "./SubCardImage.css";
import Vision from "../../../assets/GovOfficer.png";
import Guest from "../../../assets/LibraryMember.png";

function SubCardImage() {
  return (
    <div className="SubCardImageContain">
      <div className="CardImage1">
        <div className="Historycard">
          <img src={Vision} className="cardimg card-img-top" alt="Vision" />
          <div className="card-body">
            <h4>Prof. Dr. Biswaroop Mehera</h4>
            <h6>Pro Vice-Chancellor <br />"Visionary" </h6>
            <p className="card-text">
              "We gratefully acknowledge the vision and dedication of Prof. Dr.
              Biswaroop Mehera, whose unwavering support and contribution laid
              the foundation of our library. His belief in knowledge as a
              guiding light continues to inspire and nurture generations of
              learners."
            </p>
          </div>
        </div>
      </div>

      <div className="CardImage1">
        <div className="Historycard">
          <img src={Vision} className="cardimg card-img-top" alt="Vision" />
          <div className="card-body">
            <h4>Prof. Shireesh Kedare</h4>
            <h6> Director of IIT Bombay <br />"Guest"</h6>
            <p className="card-text">
              "We are deeply grateful to our esteemed Chief Guest, whose
              generous contribution and unwavering support played a
              pivotal role in establishing this library. Their vision and
              commitment have laid the foundation for a space that will nurture
              knowledge, learning, and growth for generations to come."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCardImage;
