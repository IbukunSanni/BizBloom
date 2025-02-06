/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import { FaFlagUsa, FaUserCircle } from "react-icons/fa";

import {
  FaBars,
  FaHome,
  FaUsers,
  FaCommentDots,
  FaBook,
  FaRegBuilding,
} from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineVideocam, MdOutlinePeopleAlt } from "react-icons/md";
import { HiOutlineDocument } from "react-icons/hi";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { FiZap } from "react-icons/fi";

const BACKEND_DOMAIN = import.meta.env.VITE_APP_BACKEND_URL;

/* ✅ Reviews Component */
const Reviews = () => (
  <div className="mt-4">
    <p className="text-gray-600">Reviews coming soon...</p>
  </div>
);

/* ✅ Overview Component */
const Overview = ({ mentor }) => {
  const sections = [
    {
      title: "What I Offer",
      data: mentor.offers,
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Industry",
      data: mentor.industries,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Education",
      data: mentor.education,
      color: "bg-gray-200 text-gray-700",
    },
    {
      title: "My Approach",
      data: mentor.approaches,
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <div className="mt-4">
      <p className="text-gray-700">{mentor.bio}</p>

      {sections.map(({ title, data, color }) => (
        <div key={title} className="mt-4">
          <h3 className="font-semibold">{title}:</h3>
          <div className="flex flex-wrap justify-start w-fit gap-2 mt-2">
            {data.map((item, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-sm rounded-md ${color}`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

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

const MentorProfile = () => {
  const [showSignOut, setShowSignOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    email: "julia.rowland@hotmail.com",
    avatar: "/images/profiles/julia.png",
    plan: "Free Trial",
  };

  const { mentorId } = useParams(); // Extract mentor ID from URL
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const countryFlags = {
    "United States": "/images/flags/US.png", // Replace with actual image path
    Canada: "/images/flags/CA.png", // Replace with actual image path
  };

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        console.log(`Fetching mentor with ID: ${mentorId}`); // ✅ Debug mentorId
        const url = `${BACKEND_DOMAIN}/api/users/mentors/${mentorId}`;
        const response = await axios.get(url);
        console.log("Mentor data received:", response.data); // ✅ Log the full response
        setMentor(response.data);
      } catch (err) {
        console.error("Error fetching mentor:", err);
        setError("Failed to load mentor details");
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, [mentorId]);

  return (
    <div className="relative flex flex-col items-center w-full h-full bg-[#FFF] pt-16 pb-20">
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
                  {/* Logout button  */}
                  <button
                    className="w-full border-[3px] text-white bg-[#6E00AD] border-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] py-2 px-6 rounded-lg transition-colors duration-200"
                    onClick={() => {
                      navigate("/bb/");
                      toast.success("You have logged out");
                    }}
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

      {/* Mentor Details  */}
      <div className="flex flex-col">
        {loading ? (
          <p>Loading mentor details...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : mentor ? (
          <>
            {/* Mentor Full details below */}
            <div className="w-full px-4 flex flex-col items-center">
              {/* Profile image  */}
              <div className=" relative flex w-[20rem] h-[20rem] mt-4 px-[0.5rem] py-[0.625rem] overflow-hidden ">
                {mentor.first_name ? (
                  <>
                    <img
                      src={`/images/mentor_pics/${mentor.first_name}${mentor.last_name}.jpg`}
                      alt={`${mentor.first_name} ${mentor.last_name}`}
                      className="w-full h-full object-cover object-top rounded-lg"
                      onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loops
                        e.target.src = `/images/mentor_pics/${mentor.first_name}${mentor.last_name}.png`; // Fallback to PNG
                      }}
                    />
                  </>
                ) : (
                  <FaUserCircle className="w-full h-full text-gray-500" />
                )}

                {/* Availability Badge */}
                {mentor.asap_availability && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2  flex items-center bg-green-100 text-green-700 px-3 py-1 mt-3 rounded-full w-fit">
                    <FiZap className="mr-2" />
                    Available ASAP
                  </div>
                )}
              </div>

              {/* Mentor Details */}
              <div className="flex flex-col">
                {/* Name and Contry  */}
                <div className="flex items-center justify-start w-fit gap-2">
                  <h1 className="text-xl font-bold whitespace-nowrap">
                    {mentor.first_name} {mentor.last_name}
                  </h1>

                  {mentor.country in countryFlags ? (
                    <img
                      src={countryFlags[mentor.country]}
                      alt={mentor.country}
                      className="w-6 h-auto"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm whitespace-nowrap">
                      {mentor.country}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-500 flex items-center gap-1 w-fit">
                  <FaRegBuilding className="shrink-0" />
                  <span className="whitespace-nowrap">{mentor.job_title}</span>
                  <span className="whitespace-nowrap">at</span>
                  <span className="whitespace-nowrap">{mentor.company}</span>
                </p>
                {/* Experience */}
                <p className="mt-2 text-gray-600">
                  <strong>{mentor.years_of_experience} years</strong> of
                  experience
                </p>
              </div>

              {/* Tabs (Overview, Reviews) */}
              <div className="mt-4 flex gap-4 border-b">
                {["overview", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    className={`pb-2 ${
                      activeTab === tab
                        ? "border-b-2 border-purple-600 font-semibold"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === "overview" ? (
                <Overview mentor={mentor} />
              ) : (
                <Reviews />
              )}

              {/* Book a Session Button */}
              <button className="w-[80%] mt-6 bg-purple-600 text-white py-3 px-3 rounded-lg font-semibold hover:bg-purple-700">
                Book a Session
              </button>
            </div>
          </>
        ) : (
          <p>No mentor found</p>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div
        className={`fixed bottom-0 w-full bg-[#F8F8F8] flex justify-around p-3 border-t border-gray-300 z-40 ${
          isMenuOpen ? "z-40 opacity-50" : "z-50 opacity-100"
        }`}
      >
        <button
          onClick={() => {
            navigate("/bb/dashboardpage");
          }}
          className="flex flex-col items-center text-gray-400 hover:text-gray-600 active:text-gray-800"
        >
          <FaHome className="text-xl" />
          <span className="text-xs">Home</span>
        </button>
        <button
          onClick={() => {
            navigate("/bb/mentorshipsearchpage");
          }}
          className="flex flex-col items-center text-purple-600"
        >
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

export default MentorProfile;
