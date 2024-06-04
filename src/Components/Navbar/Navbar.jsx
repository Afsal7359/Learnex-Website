import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Mini Bootcamp', path: '/mini-bootcamp' },
    { name: 'Bootcamp', path: '/bootcamp' },
    { name: 'Hire from us', path: '/hire-from-us' },
    { name: 'Contact us', path: '/contact-us' },
  ];

  return (
    <div className="flex relative z-10 flex-col justify-center py-5 mt-0 w-full bg-zinc-900 max-md:max-w-full">
      <div className="flex gap-5 justify-between px-20 py-3.5 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="py-2 text-3xl font-bold leading-10 text-white whitespace-nowrap">
          Learnex
        </div>
        <div className="hidden md:flex gap-2 items-center text-base font-medium leading-6 text-white">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`cursor-pointer px-5 py-3 whitespace-nowrap ${
                location.pathname === item.path
                  ? 'border-b-4 border-b-orange-400'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-2 text-base font-medium leading-6 text-white">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer px-5 py-3 whitespace-nowrap ${
                location.pathname === item.path
                  ? 'border-b-4 border-b-orange-400'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
