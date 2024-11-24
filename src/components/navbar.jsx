import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Users, CuboidIcon as Cubes, Newspaper, Phone, Menu } from "lucide-react";

const navLinks = [
  {
    icon: <Home className="h-6 w-6" />,
    name: "Home",
    path: "/",
  },
  {
    icon: <Users className="h-6 w-6" />,
    name: "About Us",
    path: "/about",
  },
  {
    icon: <Cubes className="h-6 w-6" />,
    name: "Our Offerings",
    path: "/services",
  },
  {
    icon: <Newspaper className="h-6 w-6" />,
    name: "News & Updates",
    path: "/news",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    name: "Contact Us",
    path: "/contacts",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-main-green px-2 md:px-24 py-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/agriorganic.png?height=64&width=180"
              alt="AGR Organic Logo"
              className="h-16"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center text-xl font-normal transition-colors ${
                  isActive
                    ? "font-semibold text-other-green px-2 py-1 "
                    : "text-white font-medium"
                }`
              }
            >
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Button (Top Right) */}
        <div className="lg:hidden px-4">
          <button
            onClick={toggleMenu}
            className="border-white text-white"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </div>
      </div>

      {/* Side Menu (Mobile) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black text-white bg-opacity-50 z-50">
          <div
            id="sidebar"
            className="absolute top-0 right-0 w-[250px] h-full bg-main-green text-white shadow-lg p-4"
          >
            <nav className="flex flex-col space-y-4 my-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={toggleMenu}
                  className="flex items-center space-x-2 rounded-lg px-2 py-8 transition-colors hover:bg-main-green/50"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

 
    </nav>
  );
}

export default Navbar;
