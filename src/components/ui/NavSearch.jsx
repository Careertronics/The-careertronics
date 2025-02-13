"use client";
import { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Search Button - Using existing navbar styling */}
      <button 
        onClick={toggleModal}
        className="flex items-center justify-center bg-transparent border-1 border-red-700 text-white p-2 rounded-lg hover:bg-red-700"
      >
        <Search className="w-4 xl:w-4.5 h-4 xl:h-4.5 z-10" />
        <span className="ml-2 hidden sm:inline text-white text-xs xl:text-sm">Search</span>
      </button>

      {/* Modal Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 transition-opacity duration-300 z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleModal}
      />

      {/* Search Modal */}
      <div
        className={`fixed left-0 right-0 bg-black border-b border-gray-800 transition-all duration-300 ease-in-out z-50 ${
          isOpen
            ? 'top-0 translate-y-0 opacity-100'
            : '-top-full translate-y-0 opacity-0'
        }`}
      >
        <div className="container mx-auto p-6">
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-4 ">
            <h2 className="text-2xl font-bold text-white">Search</h2>
            <button
              onClick={toggleModal}
              className="p-2 text-white hover:bg-red-700 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
           
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
            />
          </div>

          {/* Search Content */}
          <div className="mt-6">
            <p className="text-gray-400">Start typing to see results</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;