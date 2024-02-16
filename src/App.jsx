import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Destination" element={<Destination />} />
          <Route exact path="/Crew" element={<Crew />} />
          <Route exact path="/Technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}
