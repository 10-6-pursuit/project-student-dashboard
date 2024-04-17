
import { useState } from "react";
import StudentList from "./components/StudentList";
import CohortList from "./components/CohortList";
import data from "./data/data.json";
import Header from "./components/Header";
import "./index.css";

function App() {
  const [students, setStudents] = useState(data);

  const [cohortSeason, setCohortSeason] = useState("All Students");

  const findCohortSeason = (cohortCode) => {
    setStudents(
      data.filter(
        (student) =>
          student.cohort.cohortCode === cohortCode.split(" ").join("")
      )
    );
    setCohortSeason(cohortCode);
  };
  const showAllStudents = () => {
    setStudents(data);
    console.log(students);
    setCohortSeason("All Students");
    console.log(cohortSeason);
  };

  return (
    <div>
      <Header>Student Dashboard</Header>
      <div className="cohort-student">

      <CohortList className="cohort"
        findCohortSeason={findCohortSeason}
        showAllStudents={showAllStudents}
        />
      <StudentList students={students} setStudents={setStudents} />
    </div>
        </div>
  );
}

export default App;
