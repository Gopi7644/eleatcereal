import React from "react";
import { useState } from "react";
import HomeInsta from "../components/HomeInsta";
import Footer from "../components/Footer";

const AccountLogin = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Code Sent to:", email);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          {/* Header */}
          <div className="flex items-center space-x-2 mb-4">
            <svg
              className="h-5 w-5 text-gray-800"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 10V7c0-2.206 1.794-4 4-4s4 1.794 4 4v3H8zm11 .017V7c0-3.86-3.141-7-7-7S5 3.14 5 7v3.017a8.698 8.698 0 0 0-1.75 5.233 8.75 8.75 0 1 0 17.5 0A8.698 8.698 0 0 0 19 10.017z" />
            </svg>
            <h2 className="text-lg font-bold text-gray-900">Skio Secured</h2>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Account Login
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-600 focus:border-gray-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Get login code (sends to email)
            </button>
          </form>

          {/* Help Link */}
          <p className="text-sm text-gray-700 font-semibold mt-4 text-center">
            <a href="/account-login" className="text-gray-900 hover:underline">
              Having trouble getting your login code? Click here to log in with
              a password.
            </a>
          </p>
        </div>
      </div>
      <HomeInsta />
      <Footer />
    </>
  );
};

export default AccountLogin;
