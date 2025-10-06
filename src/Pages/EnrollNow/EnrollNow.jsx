import "./EnrollNow.css";
import Navbar from "../LandingPage1/Components/Navbar.jsx";
import HeaderSection from "./Components/HeaderSection.jsx";
import Join from "./Components/Join.jsx";
import Review from "./Components/Review.jsx";
import Footer from "../LandingPage1/Components/Footer.jsx";

function EnrollNow() {
  return (
    <div className="Conatiner" >
      <Navbar/>
      <HeaderSection/>
      <Join/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default EnrollNow
