import { useState } from 'react';
import CohortList from "./Components/CohortList.jsx"
import StudentList from  './Components/StudentList.jsx'
import studentInfoArray from './data/data.json'




function App() {
  const [students, setStudents] = useState(studentInfoArray);
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [cohort, setCohort] = useState("All Students");
  



  return (
    <div>
      <h1>Student Dashboard</h1>
    </div>
  );
}

export default App;
