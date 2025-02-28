import React from "react";
import Logo from "../assets/logo_nobg.png";
const Navbar = () => {
  return (
    <div>
      {/* Upper Navbar */}
      <div className="bg-orange-100 py-1">
        <div className="container flex justify-between items-center">
          {/* Group logo and navbar items together */}
          <div className="flex items-center space-x-4">
            <div className="perfume-shop-title md:text-4xl mx-6 my-1">
              Perfume Shop
            </div>

            <ul className="flex space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="group">
          <input
            type="text"
            placeholder="Search"
            className="w-[200px] sm:w-[200px]
          group-hover:w-[250px] transition-all
          duration-60 rounded-full border
          border-gray-300 px-1 py-2
          focus:outline-none focus:border-3
          focus:border-orange-300"
          />
        </div>
      </div>

      {/* Lower Navbar */}
      <div>

      </div>

    </div>
  );
};

export default Navbar;
