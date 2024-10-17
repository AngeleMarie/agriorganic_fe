import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { GrCubes } from "react-icons/gr";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      icon: <IoHome className="h-6 w-6 mr-4" />,
      name: "Home",
      path: "/",
    },
    {
      icon: <FaUserGroup className="h-6 w-6 mr-4" />,
      name: "About Us",
      path: "/about",
    },
    {
      icon: <GrCubes className="h-6 w-6 mr-4" />,
      name: "Our Products",
      path: "/products",
    },
    {
      icon: <IoNewspaperSharp className="h-6 w-6 mr-4" />,
      name: "News & Updates",
      path: "/news",
    },
    {
      icon: <FaPhoneAlt className="h-6 w-6 mr-4" />,
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    
    <nav className="bg-main-green text-white py-4 px-12 flex justify-between items-center relative  w-full z-50">
      <button onClick={toggleMenu}>
        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      <div className="text-center flex-grow">
        <img src="/agriorganic.png" alt="Logo" className="mx-auto h-12" />
      </div>

      <div className="hidden md:flex space-x-4">
        <SearchIcon className="h-6 w-6 cursor-pointer" />
        <UserIcon className="h-6 w-6 cursor-pointer" />
        <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
      </div>

      {isOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={closeMenu}></div>}

      <div
        className={`fixed top-0 left-0 w-80 h-full bg-main-green p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="mt-8 space-y-4">
          {navLinks.map((link, index) => (
            <li key={index}>
            
                <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-lg flex flex-row items-center mx-12 my-4 ${
                    isActive ? "bg-green-500/20 h-12 w-56 px-2 " : "text-white"
                  }`
                }
                onClick={closeMenu}
              >
            
                {link.icon}
                <span className="py-2">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
