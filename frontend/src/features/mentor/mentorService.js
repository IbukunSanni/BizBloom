import axios from "axios";

const BACKEND_DOMAIN = import.meta.env.VITE_APP_BACKEND_URL;
const MENTORS_FILTER_URL = `${BACKEND_DOMAIN}/api/mentors/filter/`;

// Fetch mentors by country
const fetchMentorsByCountry = async (data) => {
    const response = await axios.post(MENTORS_FILTER_URL, data, {
        headers: { "Content-Type": "application/json" },
    });
    return response.data;
};

const mentorService = {
    fetchMentorsByCountry,
};

export default mentorService;
