import { useState } from "react";
import CohortList from "./Components/CohortList";
import Header from "./Components/Header";
import ListCohorts from "./Components/ListCohorts";
import studentsData from "./data/data.json"

//!Create a function for onClick, if user clicks on a specific cohort class, it should then show that cohorts data on the right side(inside our Cohort List Component)

function App() {
  const [students, setStudents] = useState(studentsData);
  const [allStudents] = useState(studentsData);
  
  return (
    <>
      <Header />
      <main>
        <ListCohorts students={students} setStudents={setStudents} allStudents={allStudents}/>
        <CohortList students={students} setStudents={setStudents}/>
      </main>
    </>
  );
}

export default App;
