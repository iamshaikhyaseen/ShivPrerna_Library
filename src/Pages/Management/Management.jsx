import "./Management.css";
import Navbar from "../LandingPage1/Components/Navbar.jsx";
import HeaderSection from "../Management/Components/HeaderSection.jsx";
import ImageCards from "../Management/Components/ImageCards.jsx";
import Footer from "../LandingPage1/Components/Footer.jsx";

function Management() {
  return (
    <div className="Container">
      <Navbar />
      <HeaderSection />
      <ImageCards />
      <Footer />
    </div>
  );
}

export default Management;
