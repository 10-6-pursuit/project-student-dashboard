import { useState } from "react";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
import studentsInfo from "./data/data.json";
import "./App.css";

function App() {
  const [allStudents, setallStudents] = useState(studentsInfo);
  const [filteredStudents, setFilteredStudents] = useState(allStudents);
  const [cohortSelection, setCohortSelection] = useState("All Students");

  function filterStudents(e) {
    const cohortCode = e.target.id;
    if (cohortCode === "allstudents") {
      setCohortSelection("All Students");
      setFilteredStudents(allStudents);
    } else {
      setCohortSelection(cohortCode.split("20").join(" 20"));
      setFilteredStudents(allStudents.filter(student => student.cohort.cohortCode === cohortCode));
    }
  }

  const cohortStudents = allStudents
    .map(student => student.cohort)
    .sort((a, b) => new Date(b.cohortStartDate) - new Date(a.cohortStartDate))
    .map(cohort => cohort.cohortCode)
    .filter((code, index, array) => array.indexOf(code) === index);

  function addNote(student, comment) {
    allStudents.forEach(currStudent => currStudent.id === student.id && currStudent.notes.push(comment));
    setallStudents([...allStudents]);
  }

  return (
    <div className="container">
      <h1>Student Dashboard</h1>
      <div className="cohorts-column">
        <CohortList cohortSelection={cohortSelection} cohortStudents={cohortStudents} filterStudents={filterStudents} />
      </div>
      <ul className="students-list">
        <StudentList addNote={addNote} filteredStudents={filteredStudents} />
      </ul>
    </div>
  );
}

export default App;
