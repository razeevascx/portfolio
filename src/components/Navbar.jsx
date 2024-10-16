import { Home, User, Activity, Layers, BookOpen } from 'lucide-react';
import { useState } from 'react';

function Navbar({ fullpageApi }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    fullpageApi.moveTo(section);
    setIsOpen(false);
  };

  return (
    <section className="bg-gray-800">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Portfolio</div>
        <button
          onClick={toggleMenu}
          className="text-white block lg:hidden focus:outline-none"
        >
          {/* Mobile menu button */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:space-x-6 text-white mt-4 lg:mt-0 lg:items-center lg:justify-between lg:w-auto space-y-4 lg:space-y-0`}
        >
          <li className="hover:text-yellow-300 flex items-center space-x-2 sm:justify-center">
            <Home className="w-5 h-5" />
            <a onClick={() => handleLinkClick('home')}>Home</a>
          </li>
          <li className="hover:text-yellow-300 flex items-center space-x-2 sm:justify-center">
            <User className="w-5 h-5" />
            <a onClick={() => handleLinkClick('about')}>About</a>
          </li>
          <li className="hover:text-yellow-300 flex items-center space-x-2 sm:justify-center">
            <Activity className="w-5 h-5" />
            <a onClick={() => handleLinkClick('skills')}>Skills</a>
          </li>
          <li className="hover:text-yellow-300 flex items-center space-x-2 sm:justify-center">
            <Layers className="w-5 h-5" />
            <a onClick={() => handleLinkClick('projects')}>Projects</a>
          </li>
          <li className="hover:text-yellow-300 flex items-center space-x-2 sm:justify-center">
            <BookOpen className="w-5 h-5" />
            <a onClick={() => handleLinkClick('contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
