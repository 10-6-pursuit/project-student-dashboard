import data from "./data/data.json"
import "/src/index.css"
import Sidebar from "./components/Sidebar";
import StudentCard from "./components/StudentCard";
import { useState } from "react";

// app --> {}
function App(props) {
  console.log("App's properties:")
  console.log(props)
  const [filter, setFilter] = useState(data);
  const cohort = []
  for (let student of data) {
    
    if (!cohort.includes(student.cohort.cohortCode)){
      cohort.push(student.cohort.cohortCode)
    }
  }
  console.log(cohort)
  return (
    <div className="grid-container">
      <h1 className="grid-item1">Student Dashboard</h1>
      <Sidebar className="grid-item2" cohorts={cohort} 
      setFilter={setFilter} 
      accessData={data}
      /> 
      <ul className="grid-item3">
        {filter.map(student => (
         <StudentCard student={student}/>
         // studentcard --> {student : {israel}}
        ))}
      </ul>
    </div>
  );
}




export default App;
