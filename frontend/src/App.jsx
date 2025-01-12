/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make an Axios request to the Django backend
    
    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
    // console.log(`$This is the backendurl: ${backendUrl}`)
    axios
      .get(`${backendUrl}api/test/`)
      .then((response) => {
        setData(response.data); // Update state with data from Django
        console.log(response.data)
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>React and Django Test for biz bloom</h1>
      {data ? (
        <p>{data.message}</p> // Display the message from Django
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
