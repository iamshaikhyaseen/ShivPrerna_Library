import React from "react";
import MainNav from "./Components/Navbar";
import SubNav from "./Components/SubNav.jsx";
import EnrollBtn from "./Components/EnrollBtn.jsx";
import Law from "./Components/law.jsx";
import Carousel from "./Components/Carousel.jsx";
import Counter from "./Components/Counter.jsx";
import BookCard from "./Components/BookCard.jsx";
import Footer from "./Components/Footer.jsx";
import "./Landingpage2.css";

function LandingPage2() {
  return (
    <>
      {/* Navbar */}
      <MainNav />

      {/* ✅ Sidebar + Carousel in one row */}
      <div className="hero-section">
        <div className="sidebar">
          <SubNav />
          <div className="btn-wrapper">
            <EnrollBtn />
          </div>
        </div>

        <div className="carousel-wrapper">
          <Carousel />
        </div>
      </div>

      {/* Law Section */}
      <div className="law-section">
        <Law />
      </div>

      {/* Counters */}
      <div className="counter-section">
        <Counter />
      </div>

      {/* Books */}
      <div className="books-section">
        <BookCard />
      </div>

      {/* Footer */}
      <div className="footer-section">
        <Footer />
      </div>
    </>
  );
}

export default LandingPage2;
