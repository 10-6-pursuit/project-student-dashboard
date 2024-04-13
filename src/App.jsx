import { useState } from "react";
import CohortList from "./CohortList.jsx";
import StudentList from "./StudentList.jsx";
import studentsData from "./data/data.json"; 


function App() {

  const [students, setStudents] = useState(studentsData); 

  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList />
      <StudentList students={students}/>
    </div>
  );
}

export default App;
