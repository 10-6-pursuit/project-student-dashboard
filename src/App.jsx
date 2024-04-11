import { useState } from "react";
import CohortList from "./Components/CohortList";
import Header from "./Components/Header";
import ListCohorts from "./Components/ListCohorts";
import studentsData from "./data/data.json"

function App() {
  //Create state for student data
  const [students, setStudents] = useState(studentsData);
  return (
    //Create a function for onClick, if user clicks on a specific cohort class, it should then show that cohorts data on the right side(inside our Cohort List Component)
    <>
      <Header />
      <main>
        <ListCohorts students={students}/>
        <CohortList />
      </main>
    </>
  );
}

export default App;
