import { useState } from "react";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
import studentsInfo from "./data/data.json";
import "./App.css";

function App() {
  const [students, setStudents] = useState(studentsInfo);
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [cohortSelection, setCohortSelection] = useState("All Students");

  function filterStudents(e) {
    const cohortCode = e.target.id;
    if (cohortCode === "allstudents") {
      setCohortSelection("All Students");
      setFilteredStudents(students);
    } else {
      setCohortSelection(cohortCode.split("20").join(" 20"));
      setFilteredStudents(students.filter(student => student.cohort.cohortCode === cohortCode));
    }
  }

  const cohortStudents = students
    .map(student => student.cohort)
    .sort((a, b) => new Date(b.cohortStartDate) - new Date(a.cohortStartDate))
    .map(cohort => cohort.cohortCode)
    .filter((code, index, array) => array.indexOf(code) === index);

  function addNote(student, comment) {
    students.forEach(ele => ele.id === student.id && ele.notes.push(comment));
    setStudents([...students]);
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
