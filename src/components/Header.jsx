import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 sm:h-10" />
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex flex-col items-center text-center">
            <p className="text-xl uppercase font-bold">Logo</p>
            <nav className="mt-2">
              <ul className="flex gap-4 lg:gap-6 text-[18px] font-medium uppercase">
                <li>
                  <Link to="/shop" className="hover:text-gray-500 transition">Shop</Link>
                </li>
                <li>
                  <Link to="/skills" className="hover:text-gray-500 transition">Skills</Link>
                </li>
                <li>
                  <Link to="/stories" className="hover:text-gray-500 transition">Stories</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-500 transition">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-500 transition">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-black">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-black">
              <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-red-500">
              <FontAwesomeIcon icon={solidHeart} className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-black">
              <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
            </button>

            {/* Hamburger Menu (Mobile) */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-800">
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-4 text-center text-[16px] font-medium uppercase">
              <li>
                <Link to="/shop" onClick={() => setMenuOpen(false)} className="hover:text-gray-500">Shop</Link>
              </li>
              <li>
                <Link to="/skills" onClick={() => setMenuOpen(false)} className="hover:text-gray-500">Skills</Link>
              </li>
              <li>
                <Link to="/stories" onClick={() => setMenuOpen(false)} className="hover:text-gray-500">Stories</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-500">About</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-500">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

