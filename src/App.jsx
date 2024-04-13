import { useState } from "react";
import CohortList from "./Components/CohortList";
import Header from "./Components/Header";
import ListCohorts from "./Components/ListCohorts";
import studentsData from "./data/data.json"

function App() {
  const [students, setStudents] = useState(studentsData);
  const [allStudents] = useState(studentsData);
  
  //Add state for cohort that captures that cohort
  const [cohort, setCohort] = useState("All Students")
  return (
    <>
      <Header />
      <main>
        <ListCohorts students={students} setStudents={setStudents} allStudents={allStudents} setCohort={setCohort} />
        <CohortList students={students} setStudents={setStudents} cohort={cohort}/>
      </main>
    </>
  );
}

export default App;
