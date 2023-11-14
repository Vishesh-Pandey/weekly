import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="w-6/12 text-center m-auto">
      <h1 className="text-center">Login to Weekly</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <input
            type="email"
            className="bg-gray-100 border-gray-400 border-2 p-1 rounded-md shadow-sm w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            className="bg-gray-100 border-gray-400 border-2 p-1 rounded-md shadow-sm w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 my-2">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md shadow-sm w-full my-2 p-1"
        >
          Login
        </button>
        <Link
          to="/"
          className="bg-green-500 text-white rounded-md shadow-sm w-full my-2 p-1"
        >
          Don't have account? Click here to Signup or to Login with{" "}
          <i className="bi bi-google"></i> google
        </Link>
      </form>
      <p className="text-gray-500 font-bold py-2">
        Create your weekly schedule and share it with others in one click
      </p>
    </div>
  );
}

export default Login;
