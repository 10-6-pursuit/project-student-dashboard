import React from "react";
import data from "/src/data/data.json";
import StudentCard from "./StudentCard";

export default function StudentList({ filter, comments, addComment, handleFilterTitle, darkMode }) {
  const filteredData = data.filter((student) => !filter ? true : student.cohort.cohortCode.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="list">
      <h2 className="list__title">{filter ? handleFilterTitle(filter) : "All Students"}</h2>
      <p className="list__para"> Total Students: {filteredData.length}</p>
      {filteredData.map((student) => (
        <StudentCard key={student.id} student={student} darkMode={darkMode} comments={comments[student.id] || []} addComment={(commenter, comment) => addComment(student.id, commenter, comment)}/>
      ))}
    </div>
  );
}