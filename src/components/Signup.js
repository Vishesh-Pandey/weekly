import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const googleSignup = () => {
    // signInWithRedirect(auth, provider);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Error is : ");
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="w-1/4 text-center m-auto mt-14 p-4 ">
      <h1 className="text-center text-slate-600 text-2xl font-extrabold">Get Registered</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <input
            type="email"
            className="bg-gray-100 border-2 rounded-md shadow-sm w-full p-2 ring ring-green-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>
        <div className="my-2">
          <input
            type="password"
            className="bg-gray-100 border-2 rounded-md shadow-sm w-full my-1 p-2 ring ring-green-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 my-2">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md shadow-sm w-full my-2 p-2 transition-bg duration-300 ease-in-out hover:bg-green-400 hover:font-bold"
        >
          Sign Up
        </button>


      </form>
      <button
        onClick={googleSignup}
        className="bg-amber-300 text-white rounded-md shadow-sm w-full mb-2 p-2 transition-bg duration-300 ease-in-out hover:bg-rose-500 hover:font-bold"
      >
        Continue with Google
      </button>
      <Link
        to="/login"
        className="text-blue-500 shadow-sm w-full my-2 p-2 hover:underline hover:text-blue-800 "
      >
        Already have an account? Login
      </Link>
    </div>
  );
};

export default Signup;
