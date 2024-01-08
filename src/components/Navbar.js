import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Navbar() {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const logout = () => {
    toggleSidebar();
    try {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("Log out Success");
          navigate("/login");
        })
        .catch((error) => {
          // An error happened.
          console.log("error", error);
        });
    } catch (error) {
      alert("Error occured", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("auth changed!");
        setemail(auth.currentUser.email);
      }
    });
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="text-center flex justify-between align-middle p-3 bg-pink-50 relative">
      <div className="weekly flex file:align-middle">
        <Link to="/login" className="text-pink-500 font-extrabold">
          Weekly
        </Link>
        <p className="text-pink-300 font-bold mx-3">No Dates, Just Weekdays!</p>
      </div>
      <div className="user" hidden={location.pathname !== "/dashboard"}>
        <i
          onClick={toggleSidebar}
          className="bi bi-person-circle text-2xl p-2"
        ></i>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-pink-200 overflow-x-hidden transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="row py-2">
          <button
            className="bg-pink-500 px-4 py-1 rounded-md"
            onClick={toggleSidebar}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className="row">
          <p>{email}</p>
        </div>
        <div className="row">
          <button
            onClick={logout}
            className="bg-red-200 p-2 rounded-md hover:bg-red-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
