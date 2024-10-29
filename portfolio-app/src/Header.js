import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
     <header className="bg-gray-300 text-gray-800 shadow-md top-0 w-full">
     <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">MyPortfolio</div>

        <nav>
        <Link to="/" className="px-5 py-2  hover:bg-gray-400 rounded">Home</Link>
          <Link to="/about" className="px-5 py-2  hover:bg-gray-400 rounded">About</Link>
          <Link to="/projects" className="px-5 py-2 hover:bg-gray-400 rounded">Projects</Link>
        </nav>
      </div>


     </header>
    </div>
  );
}

export default Header;