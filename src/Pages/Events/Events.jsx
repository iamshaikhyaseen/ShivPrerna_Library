import "./Events.css";
import Navbar from "../LandingPage1/Components/Navbar.jsx";
import HeaderSection from "./Components/HeaderSection.jsx";
import EventCard from "./Components/EventCard1.jsx";
import SubHeader from "./Components/SubHeader.jsx";
import Footer from "../LandingPage1/Components/Footer.jsx";

function Events() {
  return (
    <div className="Container">
      <Navbar />
      <HeaderSection />
      <EventCard />
      <SubHeader />
      <Footer/> 
    </div>
  );
}

export default Events;
