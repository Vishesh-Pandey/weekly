import { Route, Routes } from "react-router-dom";
import "./App.css";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Share from "./features/share/Share";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
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
