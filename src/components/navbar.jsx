import React from "react";
import "./navbar.css"

import { NavLink, Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { GrCubes } from "react-icons/gr";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    {
      icon: <IoHome className="h-6 w-6 mr-2" />,
      name: "Home",
      path: "/",
    },
    {
      icon: <FaUserGroup className="h-6 w-6 mr-2" />,
      name: "About Us",
      path: "/about",
    },
    {
      icon: <GrCubes className="h-6 w-6 mr-2" />,
      name: "Our Services",
      path: "/services",
    },
    {
      icon: <IoNewspaperSharp className="h-6 w-6 mr-2" />,
      name: "News & Updates",
      path: "/news",
    },
    {
      icon: <GrCubes className="h-6 w-6 mr-2" />,
      name: "Shop",
      path: "/products",
    },
    {
      icon: <FaPhoneAlt className="h-6 w-6 mr-2" />,
      name: "Contact Us",
      path: "/contacts",
    },
  ];

  return (
    <nav className=" navbar bg-main-green text-white py-4  flex justify-between items-center w-full z-50 px-12">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/agriorganic.png" alt="Logo" className="h-24 ml-24" />
      </div>

      {/* Navbar Links */}
      <div className="flex space-x-8">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center text-xl ${
                isActive ? "text-other-green font-semibold px-2 py-1 rounded" : "text-white"
              }`
            }
          >
      
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Icons Section */}
      <div className="bg-other-green px-4 font-medium text-xl  py-3 rounded-lg hover:bg-green-700 hover:underline">
        <Link to="/register">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
