import { useState } from "react";
import studentsData from "./data/data.json"
import Header from "./Components/Header";
import "./App.css"
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";

function App() {
const [students, setStudents] = useState(studentsData);
const [cohort, setCohort] = useState("All Students");
const [numberOfStudents, setNumberOfStudents] = useState(students.length)

  return (
    <div>
      <Header />
      <main>
        <div className="cohorts">
          <CohortList students={students}/>
        </div>
        <div className="students-section">
          <h2>{cohort}</h2>
          <h4>Total Students: <span>{numberOfStudents}</span></h4>
          <StudentList students={students}/>
        </div>
      </main>
    </div>
  );
}

export default App;
