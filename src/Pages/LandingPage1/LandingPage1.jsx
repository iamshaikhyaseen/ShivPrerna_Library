import "./LandingPage1.css";
import Navbar from "../LandingPage1/Components/Navbar.jsx";
import SubNav from "../LandingPage1/Components/SubNav.jsx";
import EnrollBtn from "../LandingPage1/Components/EnrollBtn.jsx";
import Law from "./Components/law.jsx";
import Carousel from "./Components/Carousel.jsx";
import Counter from "./Components/Counter.jsx";
import BookCard from "./Components/BookCard.jsx";
import Footer from "./Components/Footer.jsx";

function LandingPage1() {
  return (
    <div>
      <div className="LandingPage1">
        <Navbar />
        <SubNav />
        <div className="LandingPageEnrollBtn">
          <EnrollBtn />
        </div>
      </div>

      <div className="LandingPage1Mid">
        <div className="LandingPage1Law">
          <Law />
        </div>
        <div className="LandingPage1Carousel">
          <Carousel />
        </div>
      </div>

      <div>
        <Counter />
      </div>

      <div className="LandingPage1Books">
        <BookCard />
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage1;
