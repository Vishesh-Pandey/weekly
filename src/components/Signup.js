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
    <div className="md:w-6/12 w-full text-center m-auto">
      <h1 className="text-center">Sign Up to Weekly</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <input
            type="email"
            className="bg-gray-100 border-gray-400 border-2 rounded-md shadow-sm w-full p-1"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            className="bg-gray-100 rounded-md shadow-sm w-full p-1 border-gray-400 border-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 my-2">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 duration-500 text-white rounded-md shadow-sm w-full my-2 p-1"
        >
          Sign Up
        </button>

        <Link
          to="/login"
          className="bg-green-500 hover:bg-green-600 duration-500 text-white rounded-md shadow-sm w-full my-2 p-1"
        >
          Already have account? Click here to Login
        </Link>
      </form>
      <button
        onClick={googleSignup}
        className="bg-blue-500 hover:bg-blue-600 duration-500 text-white rounded-md shadow-sm w-full my-2 p-1"
      >
        <i className="bi bi-google mx-2"></i> Continue with google
      </button>
      <p className="text-gray-500 font-bold py-2">
        Create your weekly schedule and share it with others in one click
      </p>
    </div>
  );
};

export default Signup;
