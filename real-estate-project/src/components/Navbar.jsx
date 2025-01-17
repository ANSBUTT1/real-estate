import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRegListAlt, FaShoppingCart, FaUser, FaSignInAlt, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // Burger menu state
  const [darkMode, setDarkMode] = useState(false); // Dark mode toggle state

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
    if (storedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={` p-4 flex justify-between items-center px-16 sticky top-0 left-0 z-50 ${
          darkMode ? "bg-primary text-secondary" : "bg-secondary text-primary"
        } transition-all duration-300`}
      >
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">
            Real/Estate
          </Link>
        </div>

        <div className="block lg:hidden" onClick={toggleMenu}>
          <span className="text-2xl">☰</span>
        </div>

        <ul
          className={`hidden lg:flex space-x-6 ${darkMode ? "text-secondary" : "text-primary"}`}
        >
          {/* Buy Dropdown */}
          <li className="relative group">
            <Link to="/buy" className="hover:underline">
              Buy
            </Link>
            <div className="absolute z-auto  right-0 hidden group-hover:block bg-white shadow-lg p-6 rounded-lg w-64 text-sm transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 ">
              <ul className="space-y-2">
                <li>
                  <Link to="/buy/option1" className="hover:underline transition-colors duration-200 hover:text-blue-600">
                    Buy a residential property
                  </Link>
                </li>
                <li>
                  <Link to="/buy/option2" className="hover:underline transition-colors duration-200 hover:text-blue-600">
                    Buy a commercial property
                  </Link>
                </li>
                <li>
                  <Link to="/buy/option3" className="hover:underline transition-colors duration-200 hover:text-blue-600">
                    Buy a plot
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Sell Dropdown */}
          <li className="relative group">
            <Link to="/sell" className="hover:underline">
              Sell
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-6 rounded-lg w-64 text-sm transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10">
              <ul className="space-y-2">
                <li>
                  <Link to="/sell/option1" className="hover:underline transition-colors duration-200 hover:text-blue-600">
                    Sell a property
                  </Link>
                </li>
                <li>
                  <Link to="/sell/option2" className="hover:underline transition-colors duration-200 hover:text-blue-600">
                    Rent out a property
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Rent Dropdown */}
          <li className="relative group">
            <Link to="/rent" className="hover:underline">
              Rent
            </Link>
            <div className="absolute right-0 hidden group-hover:block bg-white shadow-lg p-6 rounded-lg w-64 text-sm transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10">
              <ul className="space-y-2">
                <li>
                  <Link to="/rent/option1" className="hover:underline transition-colors duration-200 hover:text-blue-600">
                    Residential properties on rent
                  </Link>
                </li>
                <li>
                  <Link to="/rent/option2" className="hover:underline transition-colors duration-200 hover:text-blue-600">
                    Commercial properties on rent
                  </Link>
                </li>
                <li>
                  <Link to="/rent/option3" className="hover:underline transition-colors duration-200 hover:text-blue-600">
                    List my home for rent
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/blogs" className="hover:underline">
              Blogs
            </Link>
          </li>
        </ul>

        <div className="lg:flex hidden justify-center gap-4 items-center">
          <Link to="/wanted" className="hover:underline">Wanted</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
          <button onClick={toggleDarkMode} className="p-2 text-lg">
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>

      <ul
        className={`lg:hidden gap-4 flex flex-col md:flex-row md:justify-center md:items-center bg-primary absolute right-0 w-screen text-secondary p-4 transition-all duration-500 ease-in-out transform ${
          isMenuOpen
            ? "max-h-screen opacity-100 translate-x-0 overflow-auto"
            : "max-h-0 opacity-0 pointer-events-none translate-y-full overflow-hidden"
        }`}
      >
        <li className="flex items-center space-x-2">
          <FaShoppingCart />
          <Link to="/buy" className="block">Buy</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaRegListAlt />
          <Link to="/sell" className="block">Sell</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaHome />
          <Link to="/rent" className="block">Rent</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaRegListAlt />
          <Link to="/blogs" className="block">Blogs</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaSignInAlt />
          <Link to="/login" className="block">Login</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaUser />
          <Link to="/signup" className="block">Sign Up</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaHome />
          <Link to="/wanted" className="block">Wanted</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
