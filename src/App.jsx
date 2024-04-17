import { useState } from "react";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
import studentsInfo from "./data/data.json"
import "./App.css";

function App() {
  const [students, setStudents] = useState(studentsInfo);
  const [filteredStudents, setFilteredStudents] = useState(students);

  const cohorts = students.map(student => student.cohort).sort((a,b)=>new Date(b.cohortStartDate) - new Date(a.cohortStartDate)).map(cohort=>cohort.cohortCode).filter((code,index,array)=>array.indexOf(code)===index);

  function filterStudents(e){
    if(e.target.id === "allstudents") {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(students.filter(ele => ele.cohort.cohortCode === e.target.id))};
  }

  function addNote(student,comment){
    students.forEach(ele => ele.id === student.id && ele.notes.push(comment))
    setStudents([...students])
  }

  return (
    <div className="container">
      <h1>Student Dashboard</h1>
        <div className="cohorts-column">
          <CohortList cohorts = {cohorts} filterStudents = {filterStudents} />
        </div>
        <ul className="students-list">
          <StudentList addNote = {addNote} filteredStudents = {filteredStudents} />
        </ul>
      </div>  
  );
}

export default App;