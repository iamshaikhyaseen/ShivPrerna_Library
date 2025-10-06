import "./Landingpage.css";
import MainNav from "./Components/Navbar.jsx";
import SubNav from "./Components/SubNav.jsx";
import EnrollBtn from "./Components/EnrollBtn.jsx";
import Law from "./Components/law.jsx";
import Carousel from "./Components/Carousel.jsx";
import Counter from "./Components/Counter.jsx";
import BookCard from "./Components/BookCard.jsx";
import Footer from "./Components/Footer.jsx";

function Landingpage() {
  return (
    <div className="bgi">
      <MainNav />
      <div className="subnav-wrapper">
        <SubNav />
        <div className="btn-wrapper">
          <EnrollBtn />
        </div>
      </div>

     
      <div className="bgi2">
        <div className="book-wrapper">
          <Carousel />
        </div>
        <Law />
      </div>

      {/* Counter of expirence */}
      <div>
        <div className="Counter">
          <Counter />
        </div>
      </div>

      {/* New Arrival Books */}
      <div className="bgi3">
        <div className="card-wrapper">
          <BookCard />
        </div>
      </div>

      {/* Footer */}
      <div className="bgi4-wrapper">
        <Footer/>
      </div>
    </div>
  );
}

export default Landingpage;
