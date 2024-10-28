import React from 'react';

function Header() {
  return (
    <div>
     <header className="bg-gray-300 text-gray-800 shadow-md fixed top-0 w-full">
     <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">MyPortfolio</div>

        <nav>
          <a href="#about" className="px-5 py-2  hover:bg-gray-400 rounded">About</a>
          <a href="#projects" className="px-5 py-2 hover:bg-gray-400 rounded">Projects</a>
          <a href="#links" className="px-5 py-2 hover:bg-gray-400 rounded">Links</a>
        </nav>
      </div>


     </header>
    </div>
  );
}

export default Header;