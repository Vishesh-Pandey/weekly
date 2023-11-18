import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Share from "./features/share/Share";

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <Link to="/login" className="text-blue-500 font-extrabold text-lg">
          Weekly
        </Link>
        <p className="text-green-500 font-bold">No Dates, Just Weekdays!</p>
      </div>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/share/:slug" element={<Share />} />
      </Routes>
    </div>
  );
}

export default App;
