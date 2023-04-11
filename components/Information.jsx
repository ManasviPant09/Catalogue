import React from 'react';
import { useState } from 'react';

const options = [
  { value: 'option1', label: 'Lowest Number (First)' },
  { value: 'option2', label: 'Highest Number (First)' },
  { value: 'option3', label: 'A-Z' },
  { value: 'option3', label: 'Z-A' },
];

const Information = () =>{
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }
    
  return(
    <div className="flex flex-col">
      <div className="p-4 border-b-2 border-gray-200 -mt-32">
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
    <div className="flex justify-center h-16 bg-gray-400">
      <h3 className="text-lg font-medium text-white mt-8">Show Advanced Search</h3>
      <svg
        className="mt-8 ml-2 h-6 w-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        fill="currentColor"
        aria-hidden="true">
        <path
        fillRule="evenodd"
        d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
        clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="flex justify-center mt-6 mb-8">
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-medium py-4 px-32 rounded mr-40">Surprise Me</button>
        <div className="relative inline-block text-left">
          <div className="flex justify-center items-center">
            <h3 className="flex justify-center text-lg font-medium text-gray-700 mr-6">Sort By</h3>
            <span className="rounded-md shadow-sm">
              <button
               type="button"
               className="mr-4 bg-gray-600 inline-flex justify-center w-full rounded-md border border-gray-300 px-12 py-2 bg-white text-medium font-medium text-white focus:outline-none focus:ring-indigo-500"
               id="options-menu"
               style={{minWidth: "18rem"}}
               aria-haspopup="true"
               onClick={() => setIsOpen(!isOpen)}>
              {selectedOption.label}
              <svg
              className="-mr-8 mt-0.5 ml-8 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 text-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <button
                key={option.value}
                className={`${
                  option === selectedOption ? 'bg-gray-900 text-white' : 'text-white'
                } block px-4 py-2 text-sm w-full text-left`}
                role="menuitem"
                onClick={() => handleOptionChange(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
</div>
);
}

export default Information;
