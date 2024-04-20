import { useState } from "react";
import studentsData from "./data/data.json"
import Header from "./Components/Header";
import "./App.css"
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";

function App() {
const [allStudents] = useState(studentsData);
const [students, setStudents] = useState(allStudents);
const [cohort, setCohort] = useState("All Students");
const [numberOfStudents, setNumberOfStudents] = useState(students.length);


  return (
    <div>
      <Header/>
      <main>
        <div className="cohorts">
          <CohortList setNumberOfStudents={setNumberOfStudents} allStudents={allStudents} setCohort={setCohort}  setStudents={setStudents} />
        </div>
        <div className="students-section">
          <h2>{cohort}</h2>
          <h4>Total Students: <span>{numberOfStudents}</span></h4>
          <StudentList cohortDate={cohort} students={students}/>
        </div>
      </main>
    </div>
  );
}

export default App;
