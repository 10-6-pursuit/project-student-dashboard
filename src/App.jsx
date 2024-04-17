import { useState } from "react";
import CohortList from "./CohortList.jsx";
import StudentList from "./StudentList.jsx";
import studentsData from "./data/data.json"; 


function App() {

  const [students, setStudents] = useState(studentsData); 

  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList students={students}/>
      <StudentList students={students} setStudents={setStudents}/>
    </div>
  );
}

export default App;