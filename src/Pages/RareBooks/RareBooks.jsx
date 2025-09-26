import "./RareBooks.css";
import Navbar from "../LandingPage1/Components/Navbar";
import HeaderSection from "./Components/HeaderSection";
import Books from "./Components/Books";
import Footer from "../LandingPage1/Components/Footer";

function RareBooks() {
  return (
    <div className="RareBooks">
      <Navbar />
      <HeaderSection />
      <Books />
      <Footer />
    </div>
  );
}

export default RareBooks;
