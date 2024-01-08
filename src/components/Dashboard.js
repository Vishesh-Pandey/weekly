import React, { useEffect } from "react";

import Schedule from "../features/schedule/Schedule";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("use logged in!");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="p-2">
      <Schedule />
    </div>
  );
}

export default Dashboard;
