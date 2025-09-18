import "./RareBooks.css";
import Navbar from "../Management/Components/Navbar";
import HeaderSection from "./Components/HeaderSection";
import Books from "./Components/Books";
import Footer from "../LandingPage/Components/Footer";

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
