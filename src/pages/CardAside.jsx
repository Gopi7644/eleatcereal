import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const CardAside = ({ isCartOpen, setCartOpen }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCartOpen && !event.target.closest("#cart-sidebar")) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCartOpen]);

  return (
    <div
      id="cart-sidebar"
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Cart Header */}

      <div className="flex items-center justify-between p-4 bg-gray-200">
        <h2 className="text-lg font-semibold">Your</h2>
        <button
          onClick={() => setCartOpen(false)}
          className="text-xl font-bold"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* Cart */}
      <div className="p-4">
        <p className="text-center text-gray-500">Your cart is empty</p>
      </div>
    </div>
  );
};

export default CardAside;
