import React, { useState } from "react";
import CohortList from "./components/CohortList";
import StudentList from "./components/StudentList";
import "/src/index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [filter, setFilter] = useState(null);
  const [comments, setComments] = useState({});

  const handleFilter = (cohort) => setFilter(cohort);
  const handleShowAll = () => setFilter(null);
  const handleFilterTitle = (input) => {
    const obj = {
      Winter2026: "Winter 2026",
      Fall2026: "Fall 2026",
      Summer2026: "Summer 2026",
      Spring2026: "Spring 2026",
      Winter2025: "Winter 2025",
      Fall2025: "Fall 2025",
      Summer2025: "Summer 2025",
      Spring2025: "Spring 2025",
    };

    return obj[input] ? obj[input] : input;
  };

  const addComment = (studentId, commenter, comment) => {
    setComments((prevComments) => ({...prevComments, [studentId]: [...(prevComments[studentId] || []), { commenter, comment }]}));
  };

  return (
    <div id="app" className={darkMode ? "dark-mode" : "light-mode"}>
      <h1>Student Dashboard</h1>
      <button className="toggle-btn" onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <button className={`toggle-btn ${darkMode ? "dark-mode" : "light-mode"}`} onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div className="main-container">
        <CohortList darkMode={darkMode} filter={filter} handleFilter={handleFilter} handleShowAll={handleShowAll} handleFilterTitle={handleFilterTitle} />
        <StudentList filter={filter} comments={comments} addComment={addComment} handleFilterTitle={handleFilterTitle} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
