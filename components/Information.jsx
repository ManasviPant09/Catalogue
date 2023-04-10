import React from 'react';
import { useState } from 'react';
const Information = () =>{
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);}
    
  return(
    <div className="flex flex-col">
      <div className="p-4 border-b-2 border-gray-200 mt-0.5">
        <h1 className="text-3xl text-gray-500 mb-4 ml-44">Pokédex</h1>
      </div>
      <div className="flex bg-gray-800">
        <div className="flex flex-col w-full ml-48 mt-6">
          <h1 className="text-3xl text-white mb-4 font-light">Name or Number</h1>
          <div className="relative flex items-center">
            <input 
            className="w-96 h-12 px-3 pr-10 text-sm text-gray-700 placeholder-gray-400 border-2 border-gray-500 rounded-md focus:outline-gray focus:shadow-outline"
            type="text"/>
            <div className="absolute inset-y-0 right-0 flex items-center mr-28">
                <div className="rounded-md bg-orange-500 pt-3 pb-3 pr-3 pl-2 hover:bg-orange-700 w-14">
                    <svg
                      className="w-6 h-6 fill-current text-white ml-1"
                      viewBox="-5 1 20 14"
                    >
                    <path
                      fillRule="evenodd"
                      d="M10.5 9h-.79l-.28-.27A6.47 6.47 0 0 0 11 4.5 6.5 6.5 0 1 0 4.5 11c1.71 0 3.26-.66 4.43-1.76l.27.28v.79l4 4L15 14l-4-4zm-6 0A4.5 4.5 0 1 1 9 4.5a4.5 4.5 0 0 1-4.5 4.5z"/>
                    </svg>
                </div>
            </div>
        </div>
    <div className="text-white mt-2 mb-6 w-96">Use the Advanced Search to explore Pokémon by type, weakness, ability and more!</div></div>
    <h1 className="rounded-lg h-28 text-xl text-white mt-8 mr-48 bg-green-500 p-4 w-auto">Search for a Pokémon by name or using its National Pokédex Number.</h1></div>    
    <div className="h-16 bg-gray-400">
    </div>
    <div className="flex justify-center">
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-medium py-4 px-32 rounded">Surprise Me</button>
        <div className={`${isOpen ? 'block' : 'hidden'} absolute right-0`}>
        <div className="dropdown">
          <div tabIndex="0" className="m-1 btn btn-sm btn-outline-primary dropdown-toggle" onClick={toggleDropdown}>
            Options
          </div>
          <div tabIndex="-1" role="menu" aria-hidden="true" className="menu dropdown-menu">
            <div tabIndex="0" role="menuitem" className="menu-item">Option 1</div>
            <div tabIndex="0" role="menuitem" className="menu-item">Option 2</div>
            <div tabIndex="0" role="menuitem" className="menu-item">Option 3</div>
          </div>
        </div>
      </div>
    </div>
</div>
);
}

export default Information;
