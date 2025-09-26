import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/LandingPage1/LandingPage1.jsx";
import History from "./Pages/History/History.jsx";
import AllBooks from "./Pages/LandingPage1/LandingPage1.jsx";
import RareBooks from "./Pages/RareBooks/RareBooks.jsx";
import Events from "./Pages/Events/Events.jsx";
import Management from "./Pages/Management/Management.jsx";

function App() {
  return (
    // <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/all_books" element={<AllBooks />} />
          <Route path="/rare_books" element={<RareBooks />} />
          <Route path="/events" element={<Events />} />
          <Route path="/management" element={<Management />} />
        </Routes>
      </div>
    // </Router>
  );
}

export default App;
