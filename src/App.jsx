
import CohortList from "./CohortList.jsx";
import StudentList from "./StudentList.jsx";
import studentsData from "./data/data.json";
import { useState } from "react";


function App() {

  const [students, setStudents] = useState(studentsData);


  return (
    <div>
      <h1>Student Dashboard</h1>
      <StudentList students={students}/>
      <CohortList />
    </div>
  );
}

export default App;
