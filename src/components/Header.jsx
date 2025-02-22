import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  const messages = [
    "FREE delivery on subscriptions or orders over £40",
    "Subscribe & get 10% off your first order!",
    "Free gift on orders over £50",
  ];

  const nextClick = () => setCurrentIndex((prev) => (prev + 1) % messages.length);
  const prevClick = () =>
    setCurrentIndex((prev) => (prev === 0 ? messages.length - 1 : prev - 1));

  return (
    <header className="top-0 left-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-center py-2 bg-[#a88fd9]">
        <button onClick={prevClick} className="mr-4">
          <img src={logo1} loading="lazy" alt="Previous" />
        </button>
        <span className="text-xs md:text-xl lg:text-xl font-bold">
          {messages[currentIndex]}
          <Link to="" className="hover:text-purple-600 underline">
            - Shop now
          </Link>
        </span>
        <button onClick={nextClick} className="ml-4">
          <img src={logo2} loading="lazy" alt="Next" />
        </button>
      </div>

      <div className="container mx-auto flex items-center justify-between md:py-5 py-2 px-3 ">
        <div className="hidden md:flex space-x-6 text-xl font-medium">
          <Link to="/" className="hover:text-purple-600">Shop</Link>
          <Link to="/bundle" className="hover:text-purple-600">Build a Bundle</Link>
        </div>

        <Link to="#" className="text-4xl font-bold md:text-center">
          ELEAT
        </Link>

        <div className="flex items-center space-x-9">
          <div className="relative group hidden md:block">
            <button className="p-2 text-xl font-medium">About</button>
            <ul className="absolute top-full left-0 p-4 bg-white hidden group-hover:block w-38 space-y-4 z-50">
              <li><Link to="/reviews">Reviews</Link></li>
              <li>
                <Link
                  to="/our-story"
                  className={location.pathname === "/our-story" ? "pointer-events-none text-gray-500" : ""}
                >
                  Our Story
                </Link>
              </li>
              <li><Link to="/locator">Store Locator</Link></li>
            </ul>
          </div>
          <Link to="/refer" className="hidden md:block text-xl font-medium">Refer a Friend</Link>

          <Link to="/account-login">
            <svg className="hidden md:block" width="22" height="22" viewBox="0 0 18 18">
              <circle cx="9" cy="5.5" r="4.5" stroke="#2C3A45" strokeWidth="2" />
              <path d="M1 17C2.7 13.5 5.7 11.7 9 11.7C12.3 11.7 15.3 13.6 16.8 16.6" stroke="#2C3A45" strokeWidth="2" />
            </svg>
          </Link>
          <button onClick={() => setCartOpen(true)}>
            <FaShoppingCart size={22} />
          </button>
        </div>

        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white text-center space-y-4 py-4 border-t">
          <Link to="/" className="block py-3 text-lg hover:text-purple-600">Shop</Link>
          <Link to="/bundle" className="block py-3 text-lg hover:text-purple-600">Build a Bundle</Link>
          <Link to="/our-story" className="block py-3 text-lg hover:text-purple-600">Our Story</Link>
          <Link to="/refer" className="block py-3 text-lg hover:text-purple-600">Refer a Friend</Link>
        </nav>
      )}

      {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 md:w-120 h-full bg-white shadow-lg z-50">
          <div className="flex items-center justify-between bg-[#a88fd9] p-4 text-black text-sm font-medium">
            <button className="mr-4 cursor-pointer"><img src={logo1} loading="lazy" alt="Previous" /></button>
            <span>30 Day Money-Back Guarantee</span>
            <button className="ml-4 cursor-pointer"><img src={logo2} loading="lazy" alt="Next" /></button>
          </div>

          <div className="flex justify-between p-4">
            <h1 className="text-4xl font-bold">Your Cart (0)</h1>
            <button onClick={() => setCartOpen(false)} className="text-4xl cursor-pointer">
              <FaTimes />
            </button>
          </div>

          <div className="p-4 border-b">
            <div className="relative w-full h-2 bg-gray-300 rounded-full">
              <div className="absolute left-[40%] -top-1 w-4 h-4 bg-[rgb(107,227,237)] rounded-full"></div>
              <span className="absolute left-[38%] -top-6 text-xs font-bold">£40</span>
              <div className="absolute left-[80%] -top-1 w-4 h-4 bg-[rgb(107,227,237)] rounded-full"></div>
              <span className="absolute left-[78%] -top-6 text-xs font-bold">£59</span>
            </div>

            <div className="mt-4">
              <p className="flex items-center">
                <span className="h-3 w-3 bg-[rgb(107,227,237)] rounded-full mr-2"></span>
                Spend <strong>£40.00</strong> more to unlock free delivery
              </p>
              <p className="flex items-center mt-1">
                <span className="h-3 w-3 bg-[rgb(107,227,237)] rounded-full mr-2"></span>
                Spend <strong>£59.00</strong> more to unlock your free gift
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 w-full bg-gray-100 shadow-lg">
            <div className="p-4">
              <div className="flex justify-between">
                <span className="font-medium text-lg">Total</span>
                <span className="font-medium text-lg">£0.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>£3</span>
              </div>
            </div>
            <button className="w-full bg-[rgb(107,227,237)] text-black font-bold py-4 text-center">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
