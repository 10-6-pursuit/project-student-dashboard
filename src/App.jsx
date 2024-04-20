import React, { useState } from "react";
import CohortList from "./components/CohortList";
import data from "./data/data.json";
import "/src/index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [] = useState();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  localStorage.setItem("storedData", JSON.stringify(data));

  function setData() {
    const data = localStorage.getItem("storedData")
    if (data) {
      
    }
  }

  return (
    <div id="app" className={darkMode ? "dark-mode" : ""}>
      <h1>Student Dashboard</h1>
      <button className="toggle-btn" onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <CohortList darkMode={darkMode} />
    </div>
  );
}

export default App;
