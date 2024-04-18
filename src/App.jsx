import { useState } from "react";
import StudentList from "./Components/StudentList.jsx";
import data from "./data/data.json";
import CohortList from "./Components/CohortList.jsx";
import "./App.css";

function App() {

  const [currentCohort, setCurrentCohort] = useState("All Students")

  function handleCohort(ele) {
    // setCurrentCohort(ele)
    console.log(ele)
    setCurrentCohort(ele.target.childNodes[0].data);
  }

  return (
    <div>
      <h1 className="title">Student Dashboard</h1>
      <section className="body-container">
        <CohortList className="cohortlist" data = {data} handleCohort={handleCohort} currentCohort={currentCohort}/>
        <StudentList className="studentlist" data = {data} currentCohort={currentCohort}/>
      </section>
    </div>
  );
}

export default App;
