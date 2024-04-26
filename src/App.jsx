import { useState } from "react";
import CohortList from "./CohortList.jsx";
import StudentList from "./StudentList.jsx";
import studentsData from "./data/data.json"; 


function App() {

  const [heading, setHeading] = useState("Cohort List");

  const [students, setStudents] = useState(studentsData);
  
  const [filteredStudents, setFilteredStudents] = useState(students);

  function handleCohortChange(e) {
    setHeading(e.target.innerText)
   if (!e.target.id) { 
    setFilteredStudents(students)    
   } else {
    setFilteredStudents(students.filter((student) => student.cohort.cohortCode === e.target.id))
  }
  }

  return (
    <div>
      <h1>Student Dashboard</h1>
      <h2>{heading}</h2>
      <CohortList handleCohortChange={handleCohortChange} students={students} />
      <StudentList students={filteredStudents} setStudents={setStudents}/>
    </div>
  );
}

export default App;