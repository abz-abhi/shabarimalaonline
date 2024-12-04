import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginForm() {
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  return (
    <form className="flex flex-col space-y-6 p-10 max-w-[36rem] bg-[rgb(240,240,240)] relative -top-[29rem] left-[70rem]">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email ID / Mobile Number
        </label>
        <input
          id="email"
          name="email"
          className="outline-none border border-gray-300 rounded px-2 py-1 w-full"
          placeholder="Email ID / Mobile Number"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            className="outline-none border border-gray-300 rounded px-2 py-1 w-full"
            placeholder="Password"
            type={passwordType}
            required
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute inset-y-0 right-2 flex items-center text-gray-500"
          >
            {passwordType === "password" ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="bg-goldenyellow text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
      <div className="flex justify-around">
        <h1 className="">
          New User ?{" "}
          <a
            className="text-goldenyellow underline hover:text-black pl-2"
            href="#"
          >
            <Link to="/register">Register</Link>
          </a>
        </h1>
        <a className="text-goldenyellow underline hover:text-black" href="#">
          Forgotten Password?
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
