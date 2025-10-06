import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/LandingPage1/LandingPage1.jsx";
import History from "./Pages/History/History.jsx";
import AllBooks from "./Pages/AllBooks/AllBooks.jsx";
import RareBooks from "./Pages/RareBooks/RareBooks.jsx";
import Events from "./Pages/Events/Events.jsx";
import Management from "./Pages/Management/Management.jsx";
import EnrollNow from "./Pages/EnrollNow/EnrollNow.jsx";
import AdminLogin from "./Pages/AdminLogin/AdminLogin.jsx";
import SubNav from "./Pages/LandingPage1/Components/SubNav.jsx";
import Books from "./Pages/AllBooks/AllBooks.jsx";

function App() {
  return (
    // <Router>
    <div>
      <Routes>
        <Route path="/all_books" element={<Books />} />
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/all_books" element={<AllBooks />} />
        <Route path="/rare_books" element={<RareBooks />} />
        <Route path="/events" element={<Events />} />
        <Route path="/management" element={<Management />} />
        <Route path="/enroll" element={<EnrollNow />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </div>
    // </Router>
  );
}

export default App;
