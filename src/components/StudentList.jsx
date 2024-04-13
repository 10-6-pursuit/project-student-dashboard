import React from "react";
import data from "/src/data/data.json";
import StudentCard from "./StudentCard";
import "/src/styles/StudentList.css";

export default function StudentList({ filter }) {
  const filteredData = data.filter((student) => {
    if (!filter) return true;
    return student.cohort.cohortCode.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h2 id="list-title">{filter || "All Students"}</h2>
      <p id="list-total">Total Students: {filteredData.length}</p>
      {filteredData.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
