import React, { useState } from "react";
import StudentList from "./StudentList";
import "/src/styles/CohortList.css";

export default function CohortList() {
  const [filter, setFilter] = useState(null);
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
  
    if (obj[input]) {
      return obj[input];
    } else {
      return input;
    }
  };

  return (
    <div className="cohort-list">
      <div className="cohort-list__container">
        <h2 className="cohort-list__container__filter-title">{filter ? `Showing ${handleFilterTitle(filter)}` : "Choose a Class by Start Date"}</h2>
        <button className="cohort-list__container__filter-btn" onClick={handleShowAll}>All Students</button>
        <button className="cohort-list__container__filter-btn" onClick={() => handleFilter("Winter2026")}>Winter 2026</button>
        <button className="cohort-list__container__filter-btn" onClick={() => handleFilter("Fall2026")}>Fall 2026</button>
        <button className="cohort-list__container__filter-btn" onClick={() => handleFilter("Summer2026")}>Summer 2026</button>
        <button className="cohort-list__container__filter-btn" onClick={() => handleFilter("Spring2026")}>Spring 2026</button>
        <button className="cohort-list__container__filter-btn" onClick={() => handleFilter("Winter2025")}>Winter 2025</button>
        <button className="cohort-list__container__filter-btn" onClick={() => handleFilter("Fall2025")}>Fall 2025</button>
        <button className="cohort-list__container__filter-btn" onClick={() => handleFilter("Summer2025")}>Summer 2025</button>
        <button className="cohort-list__container__filter-btn" onClick={() => handleFilter("Spring2025")}>Spring 2025</button>
      </div>

      <StudentList filter={filter} handleFilterTitle={handleFilterTitle}/>
    </div>
  );
}