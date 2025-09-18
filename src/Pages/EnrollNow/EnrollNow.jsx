import "./EnrollNow.css";
import Navbar from "../Management/Components/Navbar.jsx";
import HeaderSection from "./Components/HeaderSection.jsx";
import Join from "./Components/Join.jsx";
import Review from "./Components/Review.jsx";
import Footer from "../LandingPage/Components/Footer.jsx";

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
