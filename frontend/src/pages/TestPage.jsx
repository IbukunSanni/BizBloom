/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaHome, FaUsers, FaCommentDots, FaBook } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineVideocam, MdOutlinePeopleAlt } from "react-icons/md";
import { HiOutlineDocument } from "react-icons/hi";
import { IoChevronForwardOutline } from "react-icons/io5";

// Sidebar Item Component
const SidebarItem = ({ title, subtitle }) => {
  return (
    <div className="hover:bg-gray-200 flex justify-between items-start cursor-pointer w-full pl-2">
      <div className="flex-[3] ">
        <p className="text-md font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      <IoChevronForwardOutline className="text-gray-500 text-xl flex-[1]" />
    </div>
  );
};

const TestPage = () => {
  const [showSignOut, setShowSignOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navigate = useNavigate();

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

  const user = {
    firstname: "Julia",
    lastname: "Rowland",
    email: "julia.rowland@gmail.com",
    avatar: "/images/profiles/julia.png",
    plan: "Free Trial",
  };

  const sessions = [
    {
      id: 1,
      name: "Sofia Rodriguez",
      country: "/images/flags/CA.png",
      topic: "Executing Marketing Plans",
      time: "Tomorrow at 1:00pm",
      duration: "30 minutes",
      avatar: "/images/profiles/mentor1.jpg",
    },
    {
      id: 2,
      name: "Jack Pho",
      country: "/images/flags/US.png",
      topic: "How to scale up and grow",
      time: "Thursday at 10:30am",
      duration: "45 minutes",
      avatar: "/images/profiles/mentor2.jpg",
    },
    {
      id: 3,
      name: "Latesia Johnson",
      country: "/images/flags/CA.png",
      topic: "Choosing the right strategy",
      time: "Friday at 12 noon",
      duration: "30 minutes",
      avatar: "/images/profiles/mentor3.png",
    },
  ];

  const learningResources = [
    {
      id: 1,
      title: "Business Plan",
      category: "Template",
      icon: HiOutlineDocument,
    },
    {
      id: 2,
      title: "Business Model Canvas",
      category: "Template",
      icon: HiOutlineDocument,
    },
    {
      id: 3,
      title: "Social Media Marketing",
      category: "Course",
      icon: HiOutlineDocument,
    },
  ];

  return (
    // Main
    <div className="relative flex flex-col items-center w-full h-screen bg-white pt-16 pb-20">
      {/* Sign Out Modal  */}
      {showSignOut && (
        <>
          {/* Modal Overlay  */}
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity flex items-center justify-center z-50">
            {/* Modal Content  */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-[80%] max-w-md mx-4 relative">
              {/* Close button */}
              <button
                onClick={() => {
                  setShowSignOut(false);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <div className="py-2 flex flex-col gap-2">
                {/* Title  */}
                <div className="flex-col gap-4">
                  <img
                    src="/images/icons/clock.png"
                    className="w-[1.5rem] aspect-auto"
                    alt="clock"
                  />
                  <p className="productbody text-[#1E1E1E] ">
                    Are you sure you want to sign out?
                  </p>
                </div>

                <div className="pt-4 space-y-4">
                  {/* Login button  */}
                  <button
                    className="w-full border-[3px] text-white bg-[#6E00AD] border-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] py-2 px-6 rounded-lg transition-colors duration-200"
                    onClick={() => navigate("/bb/chooseloginpage")}
                  >
                    Yes, Sign Out
                  </button>

                  
                  {/* Go Back button - to exit  */}
                  <button
                    onClick={() => setShowSignOut(false)}
                    className="w-full text-sm text-gray-500 hover:text-gray-700 py-2 transition-colors duration-200"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Header */}
      <div
        className={`fixed top-0 bg-gray-100 shadow-xl z-40 flex justify-between items-center w-full px-4 py-4`}
      >
        <button onClick={toggleMenu}>
          <FaBars className="text-gray-700 text-2xl cursor-pointer" />
        </button>

        <img
          src="/images/Logo_and_Name.png"
          alt="BizBloom Logo"
          className="w-32 h-8"
        />
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />

        {/* Grey Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 z-45 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Sidebar Menu */}
        {isMenuOpen && (
          <nav
            ref={menuRef}
            className=" absolute top-0 right-full translate-x-full bg-white flex flex-col   justify-center items-center  rounded z-50 "
          >
            {/* User Info */}
            <div className="flex flex-row items-start  pb-2 px-2 border-b bg-purple-100">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 ">
                  {user.firstname} {user.lastname}
                </h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <p className="px-3 py-1 ml-3 text-sm font-sans text-purple-700 bg-pink-50 rounded-full whitespace-nowrap">
                {user.plan}
              </p>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col w-full">
              <SidebarItem title="Profile" subtitle="Personal Information" />
              <SidebarItem title="Settings" subtitle="Password, security" />
              <SidebarItem
                title="Subscription"
                subtitle="Premium plan - $29/month"
              />
              <SidebarItem title="Help" subtitle="FAQs, Support" />
            </div>

            {/* Sign Out */}
            <button
              onClick={() => {
                setShowSignOut(true);
              }}
              className="hover:bg-gray-200 mt-2 text-red-500 text-md font-semibold flex flex-col items-start w-full text-left px-2"
            >
              <p>Sign Out</p>
              <p className="text-xs text-gray-500">End your session</p>
            </button>
          </nav>
        )}
      </div>

      {/* Welcome Section */}
      <div className="w-full bg-[#FDF7F0] p-4 rounded-lg">
        <h2 className="text-lg font-bold text-[#6E00AD]">
          Welcome {user.firstname}! 👋
        </h2>
        <p className="text-sm text-gray-600">
          You&apos;re all set - no upcoming sessions!
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col w-full gap-2 pt-2">
        <button className="bg-[#F8F8F8] hover:bg-gray-200 border border-gray-300  h-24 w-full rounded-2xl  flex flex-col items-center justify-center text-[#555151] font-bold">
          <MdOutlinePeopleAlt className="text-2xl" />
          Find Mentors
        </button>
        <div className="flex flex-row w-full gap-2 ">
          <button className="bg-[#F8F8F8] hover:bg-gray-200 border border-gray-300 h-full w-full rounded-2xl flex flex-col items-center justify-center text-[#555151] font-bold">
            <HiOutlineDocument className="text-2xl" />
            Resources
          </button>
          <div className="flex flex-col w-full gap-2 ">
            <button className="bg-[#F8F8F8] hover:bg-gray-200 border border-gray-300 h-24 w-full rounded-2xl flex flex-col items-center justify-center text-[#555151] font-bold">
              <MdOutlineVideocam className="text-2xl" />
              Take a Tour
            </button>
            <button className="bg-[#F8F8F8] hover:bg-gray-200 border border-gray-300 h-24 w-full rounded-2xl flex flex-col items-center justify-center text-[#555151] font-bold">
              <TbTargetArrow className="text-2xl" />
              Set Goals
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Mentor Sessions */}
      <div className="w-full mt-5">
        <h3 className="text-blue-600 font-bold text-md mb-2">
          Upcoming Mentor Sessions
        </h3>
        {sessions.map((session) => (
          <div
            key={session.id}
            className="flex flex-col p-4 border border-gray-200 rounded-xl shadow-md bg-white mb-3 w-full justify-center"
          >
            <div className="flex items-center w-full">
              <img
                src={session.avatar}
                alt="Mentor Avatar"
                className="w-[6.25rem] h-[6.25rem] rounded-full mr-3"
              />
              {/* General Info */}
              <div className="flex-grow">
                {/* Name and Flag */}
                <div className="flex items-center ">
                  {/* Name */}
                  <p className="text-sm font-bold flex place-items-start">
                    {session.name}
                  </p>
                  {/* Flag */}
                  <img
                    src={session.country}
                    alt={`${session.country} flag`}
                    className="w-5 h-3 ml-2 rounded-sm"
                  />
                </div>

                {/* Session Info */}
                <p className="text-xs text-gray-500">{session.topic}</p>
                <p className="text-xs text-gray-500">
                  {session.time} | {session.duration}
                </p>
                <button className="mt-3 px-4 py-2 text-sm bg-gray-200 text-blue-800 rounded-lg hover:bg-gray-500">
                  Join session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Resources */}
      <div className="w-full mt-5 pb-20">
        <h3 className="text-gray-800 font-bold text-md mb-2">
          Recommended Resources
        </h3>
        {learningResources.map((resource) => (
          <button
            key={resource.id}
            className="flex p-3 border border-gray-300 rounded-lg mt-2 bg-white w-full hover:bg-gray-200"
          >
            <resource.icon className="text-purple-600 text-2xl flex-[1] " />
            <div className="flex-[3] flex flex-col items-start ">
              <p className="text-xs text-gray-500 ">{resource.category}</p>
              <p className="text-sm font-bold">{resource.title}</p>
            </div>
            <IoChevronForwardOutline className="text-gray-500 text-xl flex-[1] " />
          </button>
        ))}
      </div>

      {/* Bottom Navigation Bar */}
      <div
        className={`fixed bottom-0 w-full bg-[#F8F8F8] flex justify-around p-3 border-t border-gray-300 z-40 ${
          isMenuOpen ? "z-40 opacity-50" : "z-50 opacity-100"
        }`}
      >
        <button className="flex flex-col items-center text-purple-600 ">
          <FaHome className="text-xl" />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-gray-600 active:text-gray-800">
          <FaUsers className="text-xl" />
          <span className="text-xs">Mentors</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-gray-600 active:text-gray-800">
          <LuCalendarClock className="text-xl" />
          <span className="text-xs">Book</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-gray-600 active:text-gray-800">
          <FaCommentDots className="text-xl" />
          <span className="text-xs">Chat</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-gray-600 active:text-gray-800">
          <FaBook className="text-xl" />
          <span className="text-xs">Learn</span>
        </button>
      </div>
    </div>
  );
};

export default TestPage;
