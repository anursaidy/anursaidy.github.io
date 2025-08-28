import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between items-center bg-gray-50 border-b border-blue-500 px-6 py-4">
      <h1 className="text-3xl font-bold">PORTFOLIO</h1>
      <div className="flex gap-2">
        <Link
          to="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-center"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-center"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-center"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-center"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Header;
