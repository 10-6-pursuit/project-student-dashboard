import React, { useState } from "react";
import StudentList from "./StudentList";
import "/src/styles/CohortList.css";

export default function CohortList() {
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
    <div className="cohort-list">
      <div className="cohort-list__container">
        <h2 className="cohort-list__container__filter-title">{filter ? `Showing ${handleFilterTitle(filter)}` : "Choose a Class by Start Date"}</h2>
        <button className="cohort-list__container__filter-btn" onClick={handleShowAll}> All Students </button>
        {["Winter2026", "Fall2026", "Summer2026", "Spring2026", "Winter2025", "Fall2025", "Summer2025", "Spring2025",].map((cohort) => (
          <button key={cohort} className="cohort-list__container__filter-btn" onClick={() => handleFilter(cohort)}>{handleFilterTitle(cohort)}</button>
        ))}
      </div>
      <StudentList filter={filter} comments={comments} addComment={addComment} handleFilterTitle={handleFilterTitle}/>
    </div>
  );
}
