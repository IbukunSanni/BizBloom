/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FiZap } from "react-icons/fi"; // ASAP availability icon
import { FaRegBuilding, FaUserCircle } from "react-icons/fa"; // Company & default profile icon
import { ChevronDown, ChevronUp } from "lucide-react";

const MentorProfile = () => {
  const { mentorId } = useParams(); // Extract mentor ID from URL
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/mentors/${mentorId}`);
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

  if (loading) return <p className="text-center text-gray-600">Loading mentor profile...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!mentor) return <p className="text-center text-gray-500">Mentor not found</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Mentor Profile */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          {/* Profile Picture */}
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
            <img
              src={`/images/mentor_pics/${mentor.first_name}${mentor.last_name}.jpg`}
              alt={`${mentor.first_name} ${mentor.last_name}`}
              className="w-full h-full object-cover"
              onError={(e) => (e.target.src = "/images/default-avatar.png")}
            />
          </div>

          {/* Mentor Info */}
          <div className="ml-4">
            <h1 className="text-xl font-bold">{mentor.first_name} {mentor.last_name}</h1>
            <p className="text-sm text-gray-600">{mentor.country}</p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <FaRegBuilding /> {mentor.job_title} at {mentor.company}
            </p>
          </div>
        </div>

        {/* Availability Badge */}
        {mentor.asap_availability && (
          <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 mt-3 rounded-full w-fit">
            <FiZap className="mr-2" />
            Available ASAP
          </div>
        )}

        {/* Experience */}
        <p className="mt-2 text-gray-600"><strong>{mentor.years_of_experience} years</strong> of experience</p>

        {/* Tabs (Overview, Reviews) */}
        <div className="mt-4 flex gap-4 border-b">
          {["overview", "reviews"].map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${activeTab === tab ? "border-b-2 border-purple-600 font-semibold" : "text-gray-500"}`}
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
      </div>

      {/* Book a Session Button */}
      <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
        Book a Session
      </button>
    </div>
  );
};

/* ✅ Overview Component */
const Overview = ({ mentor }) => {
  const sections = [
    { title: "What I Offer", data: mentor.offers, color: "bg-purple-100 text-purple-700" },
    { title: "Industry", data: mentor.industries, color: "bg-yellow-100 text-yellow-700" },
    { title: "Education", data: mentor.education, color: "bg-gray-200 text-gray-700" },
    { title: "My Approach", data: mentor.approaches, color: "bg-orange-100 text-orange-700" }
  ];

  return (
    <div className="mt-4">
      <p className="text-gray-700">{mentor.bio}</p>

      {sections.map(({ title, data, color }) => (
        <div key={title} className="mt-4">
          <h3 className="font-semibold">{title}:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.map((item, index) => (
              <span key={index} className={`px-3 py-1 text-sm rounded-full ${color}`}>
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

/* ✅ Reviews Component */
const Reviews = () => (
  <div className="mt-4">
    <p className="text-gray-600">Reviews coming soon...</p>
  </div>
);

export default MentorProfile;
