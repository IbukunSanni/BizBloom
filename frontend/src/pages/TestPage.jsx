/* eslint-disable no-unused-vars */
import  { useEffect, useState } from "react";
import axios from "axios";

const TestPage = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    country: "",
    min_experience: "",
    max_experience: "",
    industries: "",
    approaches: "",
    offers: "",
    education:""
  });

  const filterOptions = {
    country: ['USA', 'UK', 'Canada', 'Australia'],
    industry: ['Tech', 'Finance', 'Healthcare', 'Education'],
    experience: ['0-5', '5-10', '10-15', '15+'],
    offers: ['Remote', 'Hybrid', 'On-site']
  };



  // Handles input change
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Submits the filter request
  const handleFilter = () => {
    setLoading(true);
    setError(null);

    // Construct request payload dynamically
    const requestPayload = {};
    if (filters.country) requestPayload.country = filters.country;
    if (filters.min_experience) requestPayload.min_experience = parseInt(filters.min_experience);
    if (filters.max_experience) requestPayload.max_experience = parseInt(filters.max_experience);
    if (filters.industries) requestPayload.industries = filters.industries.split(",").map((i) => i.trim());
    if (filters.approaches) requestPayload.approaches = filters.approaches.split(",").map((a) => a.trim());
    if (filters.offers) requestPayload.offers = filters.offers.split(",").map((o) => o.trim());
    if (filters.education) requestPayload.education = filters.education.split(",").map((e) => e.trim());

    axios
      .post("http://127.0.0.1:8000/api/users/mentors/filter/", requestPayload)
      .then((response) => {
        // Remove duplicates using email as a unique key
        const uniqueMentors = [];
        const emails = new Set();

        response.data.forEach((mentor) => {
          if (!emails.has(mentor.email)) {
            emails.add(mentor.email);
            uniqueMentors.push(mentor);
          }
        });

        setMentors(uniqueMentors);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching mentors:", error);
        setError("Failed to fetch mentors");
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Filter Mentors</h2>

      {/* Filter Form */}
      <div>
        <input type="text" name="country" placeholder="Country" value={filters.country} onChange={handleChange} />
        <input type="number" name="min_experience" placeholder="Min Experience" value={filters.min_experience} onChange={handleChange} />
        <input type="number" name="max_experience" placeholder="Max Experience" value={filters.max_experience} onChange={handleChange} />
        <input type="text" name="industries" placeholder="Industries (comma-separated)" value={filters.industries} onChange={handleChange} />
        <input type="text" name="approaches" placeholder="Approaches (comma-separated)" value={filters.approaches} onChange={handleChange} />
        <input type="text" name="offers" placeholder="Offers (comma-separated)" value={filters.offers} onChange={handleChange} />
        <input type="text" name="education" placeholder="Education (comma-separated)" value={filters.education} onChange={handleChange} />
        <button onClick={handleFilter}>Apply Filter</button>
      </div>

      {/* Display Results */}
      {loading && <p>Loading mentors...</p>}
      {error && <p>{error}</p>}

      <h2>Mentors</h2>
      <ul>
        {mentors.map((mentor, index) => (
          <li key={index} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
            <h3>{mentor.first_name} {mentor.last_name}</h3>
            <p><strong>Email:</strong> {mentor.email}</p>
            <p><strong>Country:</strong> {mentor.country}</p>
            <p><strong>Years of Experience:</strong> {mentor.years_of_experience}</p>
            <p><strong>Industries:</strong> {mentor.industries.map(ind => ind.name).join(", ")}</p>
            <p><strong>Approaches:</strong> {mentor.approaches.map(app => app.name).join(", ")}</p>
            <p><strong>Offers:</strong> {mentor.offers.map(app => app.name).join(", ")}</p>
            <p><strong>Education:</strong> {mentor.education.map(app => app.name).join(", ")}</p>
            <p><strong>Bio:</strong> {mentor.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
