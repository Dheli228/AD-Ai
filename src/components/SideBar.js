// components/Sidebar.js
import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaUser, FaCog } from 'react-icons/fa';
import { GoSidebarExpand } from 'react-icons/go';

const Sidebar = ({ isExpanded, toggleNavbar }) => {
  return (
    <div className={`flex flex-col bg-blue-600 text-white w-16 transition-all duration-300 ${isExpanded ? 'w-48' : ''}`}>
      <GoSidebarExpand onClick={toggleNavbar} className="text-white ml-4 mt-4 cursor-pointer" size={24} />

      <nav className="flex flex-col items-center mt-8">
        <Link href="/" passHref>
          <div className="flex flex-col items-center my-4 cursor-pointer">
            <FaHome size={24} />
            <span className={`mt-2 text-xs ${isExpanded ? 'block' : 'hidden'}`}>Home</span>
          </div>
        </Link>
        <Link href="/about" passHref>
          <div className="flex flex-col items-center my-4 cursor-pointer">
            <FaInfoCircle size={24} />
            <span className={`mt-2 text-xs ${isExpanded ? 'block' : 'hidden'}`}>About</span>
          </div>
        </Link>
        <Link href="/profile" passHref>
          <div className="flex flex-col items-center my-4 cursor-pointer">
            <FaUser size={24} />
            <span className={`mt-2 text-xs ${isExpanded ? 'block' : 'hidden'}`}>Profile</span>
          </div>
        </Link>
        <Link href="/settings" passHref>
          <div className="flex flex-col items-center my-4 cursor-pointer">
            <FaCog size={24} />
            <span className={`mt-2 text-xs ${isExpanded ? 'block' : 'hidden'}`}>Settings</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
