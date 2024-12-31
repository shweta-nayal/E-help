import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInForm = ({ userType }) => {
  const [isRegister, setIsRegister] = useState(true);

  const toggleMode = () => setIsRegister(!isRegister);

  return (
    <div className="container min-h-screen flex flex-col justify-center items-center bg-light">
      <h2 className="text-3xl font-bold mb-6">
        {isRegister ? `Register as ${userType}` : `Login as ${userType}`}
      </h2>
      <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        {isRegister && (
          <>
            <div>
              <label htmlFor="name" className="block font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input-field"
              />
            </div>
          </>
        )}
        <div>
          <label htmlFor="password" className="block font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="input-field"
          />
        </div>
        <button
          type="submit"
          className="primary-btn w-full hover:shadow-lg transition-all duration-200"
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      <p className="mt-4">
        {isRegister ? (
          <>
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={toggleMode}
            >
              Login
            </span>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={toggleMode}
            >
              Register
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default SignInForm;
