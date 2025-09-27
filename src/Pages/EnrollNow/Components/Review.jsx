import "./Review.css";
import R1 from "../../../assets/EnrollNow/Review1.webp";

function Review() {
  return (
    <div className="MainConatin">

      <div className="OuterTag" >
        <div className="Tag">
          <h3>
            Reviews
          </h3>
        </div>
      </div>
      
      <div className="ReviewContain">
        <div className="card">
          <img src={R1} className="card-img-top" alt="ReviewImage" />
          <div className="EnrollCard-body">
            <div className="EnrollCard-text">
              <h5>
                “A well-organized library with a wide range of books and helpful
                staff. Perfect place for both study and leisure reading.”
              </h5>
              <p>- Ananya Mehta, B.A. English Literature Student</p>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={R1} className="card-img-top" alt="ReviewImage" />
          <div className="EnrollCard-body">
            <div className="EnrollCard-text">
              <h5>
                “The membership plans are affordable, and the collection is
                updated regularly. Highly recommended for students and book
                lovers.”
              </h5>
              <p>- Rahul Verma, Preparing for UPSC Exams</p>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={R1} className="card-img-top" alt="ReviewImage" />
          <div className="EnrollCard-body">
            <div className="EnrollCard-text">
              <h5>
                “Quiet, clean, and resourceful—this library creates the perfect
                environment for focused learning.”
              </h5>
              <p>- Sneha Kulkarni, M.Sc. Computer Science</p>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={R1} className="card-img-top" alt="ReviewImage" />
          <div className="EnrollCard-body">
            <div className="EnrollCard-text">
              <h5>
                “From novels to reference materials, the variety here is
                impressive. The reading programs and events make it even more
                engaging.”
              </h5>
              <p>- Arjun Deshmukh, MBA Pursuing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="OuterMsg" >
        <div className="message">
          <h3>
            Join us today and open the door to knowledge, culture, and
            community.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Review;
