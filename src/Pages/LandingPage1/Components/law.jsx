import "./law.css";
import img1 from "../../../assets/S.R.-Ranganathan.jpg";

function Law() {
  return (
    <div className="radial-container">
      <div className ="avatar">
        <img src={img1} alt="Dr. S. R. Ranganathan" />
      </div>

      <div className ="laws">
        <span className ="law">Books are for use</span>
        <span className ="law">Every reader his/her book</span>
        <span className ="law">Save the time of the reader</span>
        <span className ="law">A library is a growing organism</span>
        <span className ="law">Every book its reader</span>
        <p className ="law">
          Dr. S. R. Ranganathan (1892–1972), known as the Father of Library
          Science in India, formulated the Five Laws of Library Science and
          developed the Colon Classification system, shaping modern library
          practices worldwide.
        </p>
      </div>
    </div>
  );
}

export default Law;
