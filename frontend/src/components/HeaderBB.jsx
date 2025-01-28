/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";


const HeaderBB = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 bg-white shadow-md  w-[25.75rem]">
        {/* Grey Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 z-45 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <div className="flex w-[25.75rem] p-4 justify-center items-center gap-[6rem] z-40">
          <img
            src="\images\Logo_and_Name.png"
            alt="BizBloom Logo"
            className="flex w-[13.75rem] h-[3.6875rem] justify-center items-center shrink-0"
          />
          <button
            onClick={toggleMenu}
            className="block focus:outline-none"
          >
            <img
              src="\images\Menu.png"
              alt="Hamburger Menu"
              className="flex w-[1.5rem] h-[1.5rem] shrink-0"
            />
          </button>

          {isMenuOpen && (
            <nav
              ref={menuRef}
              className=" absolute top-0 right-0 bg-white  flex w-[9.8125rem]  p-[1.5rem] justify-center items-center gap-[1rem] rounded z-50"
            >
              <div className="flex flex-col items-start p-[0.25rem] g-[1rem] flex-shrink-0 w-[6.375rem]">
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent React Router from intercepting
                    window.location.reload(); // Reload the page
                    setIsMenuOpen(false)
                  }}
                  className="text-[#1E1E1E] font-sans text-lg font-normal leading-relaxed hover:text-blue-300"
                >
                  Home
                </Link>
                <Link
                  to="/bb/"
                  replace
                  className="text-[#1E1E1E] font-sans text-lg font-normal leading-relaxed hover:text-blue-300"
                >
                  Features
                </Link>
                <Link
                  to="/bb/"
                  className="text-[#1E1E1E] font-sans text-lg font-normal leading-relaxed hover:text-blue-300"
                >
                  About
                </Link>
                <Link
                  to="/bb/chooseloginpage"
                  className="text-[#1E1E1E] font-sans text-lg font-normal leading-relaxed hover:text-blue-300"
                >
                  Login
                </Link>
                <Link
                  to="/bb/createaccountpage"
                  className="text-[#1E1E1E] font-sans text-lg font-normal leading-relaxed hover:text-blue-300"
                >
                  Signup
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default HeaderBB;
