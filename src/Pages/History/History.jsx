import "./History.css";
import Navbar from "../LandingPage1/Components/Navbar.jsx";
import HeaderSection from "./Components/HeaderSection.jsx";
import Carousel from "./Components/Carousel.jsx";
import CardImage from "./Components/CardImage.jsx";
import SubCardImage from "./Components/SubCardImage.jsx";
import Footer from "../LandingPage1/Components/Footer.jsx";

function History() {
  return (
    <div className="crate" >
      <Navbar/>
      <HeaderSection/>
      <Carousel/>
      <CardImage/>
      <SubCardImage/>
      <Footer/>
    </div>
  )
}

export default History
