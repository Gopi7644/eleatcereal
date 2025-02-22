import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1 ">
          <h2 className="text-5xl font-bold">
            Get the low down on all things ELEAT!
          </h2>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <div className="flex mt-2 gap-3">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border-white text-black"
              />
              <button className="bg-white text-sm font-bold text-black px-4 py-2">
                SUBSCRIBE
              </button>
            </div>
            <div className="mt-2 flex items-center">
              <input type="checkbox" id="consent" className="mr-2" />
              <label htmlFor="consent" className="text-xs">
                I consent to ELEAT storing my information so that they may
                contact me in the future
              </label>
            </div>
          </div>
        </div>

    
        <div className="grid grid-cols-2 gap-8">
          <div className="">
            <h3 className="font-semibold mb-2">Explore</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Shop",
                "Build a bundle",
                "Bimuno",
                "Our story",
                "FAQs",
                "Blog",
                "Student Discount",
              ].map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Store Locator",
                "Become a stockist",
                "FAQs",
                "Your Subscription",
                "Contact",
              ].map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-2 text-sm">
              {["Returns policy", "Terms of service", "Privacy policy"].map(
                (item, index) => (
                  <li key={index} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://www.instagram.com/eleatcereal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-gray-400 transition duration-200" />
              </a>
              <a
                href="https://twitter.com/eleatcereal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-gray-400 transition duration-200" />
              </a>
              <a
                href="https://www.facebook.com/eleatcereal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-gray-400 transition duration-200" />
              </a>
              <a
                href="https://vm.tiktok.com/ZMNr8FjTG/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="hover:text-gray-400 transition duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>

    
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-white">
        <div>
          <h1 className="text-6xl font-bold">ELEAT</h1>
        </div>
        <div className="flex gap-4">
          <p>Copyright 2025 ELEAT</p>
          <p>riya tripathy</p>
        </div>
        <img
          className="h-16 w-auto"
          src="//eleatcereal.com/cdn/shop/t/107/assets/1percentfortheplannet_600x600.png?v=141594516112806266631739265238"
          alt="1% for the Planet"
        />
      </div>
    </footer>
  );
};

export default Footer; 