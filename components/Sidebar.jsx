import React from 'react';
import { FaUser, FaSearch } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col sticky top-60 z-30 w-20 border-2 border-gray-500 rounded-br-lg rounded-tr-lg">
      <div className="flex flex-col bg-green-500 text-white h-20 px-2 py-2 rounded-tr-md hover:bg-green-700 ">
        <div className="flex flex-col items-center justify-center">
            <FaUser size={24} />
            <span>Log In</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-14 bg-gray-200 px-2 py-2 rounded-br-md hover:bg-gray-900 ">
        <FaSearch size={24} />
      </div>
    </div>
  );
};
export default Sidebar;