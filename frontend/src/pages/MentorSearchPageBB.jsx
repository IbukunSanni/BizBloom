/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import { FaFlagUsa, FaUserCircle } from "react-icons/fa";

import { FaBars, FaHome, FaUsers, FaCommentDots, FaBook } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineVideocam, MdOutlinePeopleAlt } from "react-icons/md";
import { HiOutlineDocument } from "react-icons/hi";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { FiZap } from "react-icons/fi";

const BACKEND_DOMAIN = import.meta.env.VITE_APP_BACKEND_URL;

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

const MentorSearchPageBB = () => {
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

  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const [filters, setFilters] = useState({
    country: "",
    min_experience: "",
    max_experience: "",
    industries: "",
    industry: "",
    approaches: "",
    offers: "",
    education: "",
    experience: "",
  });

  const filterOptions = {
    country: ["US", "Canada"],
    industry: ["Tech", "Finance", "Healthcare", "Education"],
    experience: ["0-5", "5-10", "10-15", "15+"],
  };

  const countryFlags = {
    "United States": "/images/flags/US.png", // Replace with actual image path
    Canada: "/images/flags/CA.png", // Replace with actual image path
  };

  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [category]: value };
      return newFilters;
    });
  };

  // TODO: change environment vairiable for API endpoint
  const fetchMentors = (
    url = `${BACKEND_DOMAIN}/api/users/mentors/filter/`
  ) => {
    setLoading(true);
    setError(null);

    // Construct request payload dynamically
    const requestPayload = {};
    if (filters.country) {
      if (filters.country === "US") {
        requestPayload.country = "United States";
      } else {
        requestPayload.country = filters.country;
      }
    }

    if (filters.experience) {
      switch (filters.experience) {
        case "0-5":
          requestPayload.min_experience = 0;
          requestPayload.max_experience = 5;
          break;
        case "5-10":
          requestPayload.min_experience = 5;
          requestPayload.max_experience = 10;
          break;
        case "10-15":
          requestPayload.min_experience = 10;
          requestPayload.max_experience = 15;
          break;
        case "15+":
          requestPayload.min_experience = 15;
          break;
      }
    }
    if (filters.industry)
      requestPayload.industries = filters.industry
        .split(",")
        .map((i) => i.trim());
    axios
      .post(url, requestPayload) // Pass dynamic filter criteria here
      .then((response) => {
        setMentors(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching mentors:", error);
        setError("Failed to fetch mentors");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMentors();
  }, [filters]);

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.first_name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.last_name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.country.toLowerCase().includes(search.toLowerCase())
  );

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="relative flex flex-col items-center w-full h-full bg-[#FFF5EB] pt-16 pb-20">
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

      {/* Search and Filter */}
      <div className="flex flex-row w-full justify-between items-center px-4">
        {/* Search Bar */}
        <div className=" my-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded-lg pl-10 focus:ring focus:ring-[#6A0DAD]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Filters Dropdown Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-1 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50"
        >
          <span>
            Filters {activeFiltersCount ? `(${activeFiltersCount})` : ""}
          </span>
          {showFilters ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="grid md:grid-cols-3 gap-4 mb-8 p-4 bg-white rounded-lg shadow">
          {Object.entries(filterOptions).map(([category, options]) => (
            <div key={category} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {category}
              </label>
              <select
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={filters[category]}
                onChange={(e) => handleFilterChange(category, e.target.value)}
              >
                <option value="">All</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {/* Mentor Profiles */}
      <h2 className="text-lg font-semibold text-[#6A0DAD] mb-3">
        Mentor Profiles
      </h2>

      {loading ? (
        <p>Loading mentors...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="space-y-4 ">
            {filteredMentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white hover:bg-gray-100 active:bg-gray-200 p-4 shadow-md rounded-lg flex items-center cursor-pointer"
                onClick={() => {
                  navigate(`/bb/mentors/${mentor.id}`);
                }} // Navigate with mentor ID
              >
                <div className="space-y-1">
                  {/* Profile Picture */}
                  <div className=" w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                    {mentor.first_name ? (
                      <>
                        <img
                          src={`/images/mentor_pics/${mentor.first_name}${mentor.last_name}.jpg`}
                          alt={`${mentor.first_name} ${mentor.last_name}`}
                          className="w-full h-full  object-cover"
                          onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loops
                            e.target.src = `/images/mentor_pics/${mentor.first_name}${mentor.last_name}.png`; // Fallback to PNG
                          }}
                        />
                      </>
                    ) : (
                      <FaUserCircle className="w-full h-full text-gray-500" />
                    )}
                  </div>
                  {mentor.asap_availability ? (
                    <div className="flex gap-2 items-center px-1 bg-[#7ED001] rounded-md text-sm">
                      <FiZap className="inline-block" />
                      <span>Available ASAP</span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                {/* Mentor Details */}
                {console.log("mentor details")}
                {console.log(mentor)}
                <div className="ml-4 flex-1">
                  <div className="flex justify-between w-full items-center">
                    <h2 className="text-sm font-semibold">
                      {mentor.first_name} {mentor.last_name}
                    </h2>

                    {mentor.country in countryFlags ? (
                      <img
                        src={countryFlags[mentor.country]}
                        alt={mentor.country}
                        className="w-6 aspect-auto mt-2"
                      />
                    ) : (
                      <span className="text-gray-500 text-sm">
                        {mentor.country}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600">
                    {mentor.job_title} at {mentor.company}
                  </p>
                  <p className="text-sm text-gray-500">
                    {mentor.years_of_experience} years of experience
                  </p>
                  <p className="text-sm text-gray-400">
                    {mentor.industries.map((ind) => ind.name)[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Page Navigation buttons */}
          <div className="flex justify-between px-8 mt-4 w-full">
            {/* Prev button */}
            <button
              disabled={!prevPage}
              onClick={() => fetchMentors(prevPage)}
              className={`px-4 py-2 rounded-md text-white ${
                prevPage ? "bg-purple-600" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Previous
            </button>
            {/* Next button */}
            <button
              disabled={!nextPage}
              onClick={() => fetchMentors(nextPage)}
              className={`px-4 py-2 rounded-md text-white ${
                nextPage ? "bg-purple-600" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}

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

export default MentorSearchPageBB;
