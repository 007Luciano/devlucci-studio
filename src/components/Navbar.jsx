import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1e3a5fdc] backdrop-blur-md shadow-md"
          : "bg-[#1e3a5f]"
      } text-[#f2f4f6]`}
    >
      <div className="container mx-auto px-4 md:px-20 flex justify-between items-center py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="DevLucci logo"
            className="h-7"
            whileHover={{ scale: 1.05, rotate: -3 }}
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-medium transition-colors duration-200 ${
                pathname === link.to
                  ? "text-[#06B6D4]"
                  : "hover:text-[#FBBF24]"
              }`}
            >
              {link.name}
              {pathname === link.to && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#06B6D4]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col space-y-1">
            <span
              className={`h-0.5 w-full bg-white transition ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white transition ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1e3a5f] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={toggleMenu}
              className="px-4 py-3 hover:bg-[#2a4a75] rounded-md transition-all duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
