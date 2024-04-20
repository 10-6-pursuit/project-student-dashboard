import React, { useState } from "react";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
import data from "./data/data.json";
import Header from "./Components/Header";

function App() {
  const [studentData, setStudentData] = useState(data)

  const [students, setStudents] = useState(studentData)


  const [heading, setHeading] = useState("Choose Class By Start Date");



  const updateHeading = (e) => setHeading(e.target.innerText);

  
  
  
  function handleCohortChange(event) {


    const filteredStudent = studentData.filter(student => 

      student.cohort.cohortCode.replace("2", " 2") === event.target.innerText) 
      

    setStudents(filteredStudent);

    setCohort(event.target.innerText)
  }


  return (
      <main>
        <Header/>
        <h1>{heading}</h1>
          <div className="App">
        <sidebar>
          <CohortList handleCohortChange={handleCohortChange} students={studentData}/>
        </sidebar>
        <StudentList students={students} setStudents={setStudents}/>  
    </div>
    </main>
);

}
export default App;