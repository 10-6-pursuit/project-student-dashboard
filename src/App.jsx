import { useState } from "react";
import CohortList from "./Components/CohortList";
import Header from "./Components/Header";
import ListCohorts from "./Components/ListCohorts";
import studentsData from "./data/data.json"

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
