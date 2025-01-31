import { useState, useEffect, useRef } from "react";
/* eslint-disable react/prop-types */

const CustomDropdown = ({ options, selected, setSelected, emptySelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null); // Ref to track the dropdown

  // Function to handle outside click
  // Function to handle outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup listener when component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Button to Open Dropdown */}
      <button
        onClick={(event) => {
          event.preventDefault(); // Prevents form submission
          setIsOpen(!isOpen);
        }}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6E00AD] focus:border-[#6E00AD] outline-none
        flex justify-between items-center "
      >
        <span className="text-left flex-1">{selected || emptySelect}</span>
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>{" "}
        {/* Dropdown Arrow (kept at the far right) */}
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="p-3 hover:bg-[#6E00AD] hover:text-white cursor-pointer text-gray-700"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;