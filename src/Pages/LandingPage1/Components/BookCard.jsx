
import b1 from "../../../assets/bgMain1.jpg";
import "./BookCard.css";

function BookCard() {
  return (
    <div>
      <div className="Headding" >
        <h1>New Arrival</h1>
      </div>
      <div className="container " >
        {/* Book 1 */}
        <div className="card" style={{width:"18 rem"}} >
          <img src={b1} className="img card-img-top" alt="To Kill a Mockingbird" />
          <div className="card-body">
            <h3 className="card-title">To Kill a Mockingbird</h3>
            <h5 className="card-title">Author - Harper Lee</h5>
            <p className="card-text">
            A story about justice, morality, and racial prejudice in the American South. 
            </p>
            <button href="#" className="btn btn-dark">
             Explore
            </button>
          </div>
        </div>
        {/* Book 2 */}
        <div className="card" style={{width:"18 rem"}} >
          <img src={b1} className="img card-img-top" alt="To Kill a Mockingbird" />
          <div className="card-body">
            <h3 className="card-title">To Kill a Mockingbird</h3>
            <h5 className="card-title">Author - Harper Lee</h5>
            <p className="card-text">
            A story about justice, morality, and racial prejudice in the American South. 
            </p>
            <button href="#" className="btn btn-dark">
             Explore
            </button>
          </div>
        </div>
        {/* Book 3 */}
        <div className="card" style={{width:"18 rem"}} >
          <img src={b1} className="img card-img-top" alt="To Kill a Mockingbird" />
          <div className="card-body">
            <h3 className="card-title">To Kill a Mockingbird</h3>
            <h5 className="card-title">Author - Harper Lee</h5>
            <p className="card-text">
            A story about justice, morality, and racial prejudice in the American South. 
            </p>
            <button href="#" className="btn btn-dark">
             Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
