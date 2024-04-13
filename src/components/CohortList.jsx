import React, { useState } from "react";
import StudentList from "./StudentList";
import "/src/styles/CohortList.css";

export default function FilterButtons() {
  const [filter, setFilter] = useState(null);

  const handleFilter = (cohort) => {
    setFilter(cohort);
  };

  const handleShowAll = () => {
    setFilter(null);
  };

  return (
    <div className="main">
      <div className="container">
        <h2 id="btn-title">{filter ? `Showing ${filter}` : "Choose a Class by Start Date"}</h2>
        <button className="filter-btn" onClick={handleShowAll}>All Students</button>
        <button className="filter-btn" onClick={() => handleFilter("Winter2026")}>Winter 2026</button>
        <button className="filter-btn" onClick={() => handleFilter("Fall2026")}>Fall 2026</button>
        <button className="filter-btn" onClick={() => handleFilter("Summer2026")}>Summer 2026</button>
        <button className="filter-btn" onClick={() => handleFilter("Spring2026")}>Spring 2026</button>
        <button className="filter-btn" onClick={() => handleFilter("Winter2025")}>Winter 2025</button>
        <button className="filter-btn" onClick={() => handleFilter("Fall2025")}>Fall 2025</button>
        <button className="filter-btn" onClick={() => handleFilter("Summer2025")}>Summer 2025</button>
        <button className="filter-btn" onClick={() => handleFilter("Spring2025")}>Spring 2025</button>
      </div>

      <StudentList filter={filter} />
    </div>
  );
}