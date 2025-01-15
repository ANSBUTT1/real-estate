import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // Burger menu state
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [darkMode, setDarkMode] = useState(false); // Dark mode toggle state

  // Set initial theme based on localStorage or system preference
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
    if (storedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode); // Save preference to localStorage
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle burger menu
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`p-4 flex justify-between items-center px-16 ${
          darkMode ? "bg-primary text-secondary" : "bg-secondary text-primary"
        } transition-all duration-300`}
      >
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">
            Real/Estate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden" onClick={toggleMenu}>
          <span className="text-2xl">☰</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul
          className={`hidden lg:flex space-x-6 ${
            darkMode ? "text-secondary" : "text-primary"
          }`}
        >
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/buy" className="hover:underline">
              Buy
            </Link>
          </li>
          <li>
            <Link to="/rent" className="hover:underline">
              Rent
            </Link>
          </li>
          <li>
            <Link to="/sell" className="hover:underline">
              Sell
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:underline">
              Blogs
            </Link>
          </li>
        </ul>

        {/* Right-aligned items */}
        <div className="lg:flex hidden justify-center gap-4 items-center">
          <Link to="/wanted" className="hover:underline">
            Wanted
          </Link>
          <Link to="/signup" className="hover:underline">
            Sign Up
          </Link>
          <button onClick={toggleDarkMode} className="p-2 text-lg">
            {darkMode ? "🌙" : "☀️"} {/* Switch between sun and moon icons */}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-primary text-secondary p-4 space-y-4`}
      >
        <li>
          <Link to="/" className="block">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="block">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/buy" className="block">
            Buy
          </Link>
        </li>
        <li>
          <Link to="/login" className="block">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="block">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/rent" className="block">
            Rent
          </Link>
        </li>
        <li>
          <Link to="/sell" className="block">
            Sell
          </Link>
        </li>
        <li>
          <Link to="/wanted" className="block">
            Wanted
          </Link>
        </li>
      </ul>

      {/* Sidebar with slide-in animation */}
      {isSidebarOpen && (
        <aside
          className={`fixed top-0 left-0 w-64 h-full ${
            darkMode ? "bg-primary" : "bg-secondary"
          } text-secondary p-4 space-y-6 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="text-2xl text-secondary mb-4"
          >
            ✖️
          </button>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="block">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/buy" className="block">
                Buy
              </Link>
            </li>
            <li>
              <Link to="/login" className="block">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="block">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/rent" className="block">
                Rent
              </Link>
            </li>
            <li>
              <Link to="/sell" className="block">
                Sell
              </Link>
            </li>
            <li>
              <Link to="/wanted" className="block">
                Wanted
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navbar;
