import { useState } from "react";
import cohortsData from "../data/cohorts";
import Cohort from "./Cohort";

export default function ListCohorts({
  students,
  setStudents,
  allStudents,
  setCohort,
}) {

  //Creating a state for dark mode
  const [theme, setTheme] = useState("light");

  //Create function for switching. Should add a className called "dark" if on light and if on dark should remove it if clicked on button again.
  const buttonText = theme === "light" ? "Dark Mode" : "Light Mode";

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

  }



  function showAll() {
    setStudents(allStudents);
    setCohort("All Students");
  }

  const sortedCohorts = [...allStudents].sort((a, b) =>
  new Date(b.cohort.cohortStartDate).getFullYear() - new Date(a.cohort.cohortStartDate).getFullYear() ||
  new Date(b.cohort.cohortStartDate).getMonth() - new Date(a.cohort.cohortStartDate).getMonth()
);

const uniqueSeasons = Array.from(new Set(sortedCohorts.map(student => student.cohort.cohortCode.replace("2", " 2"))))

  return (
    <div className="cohorts">
      <h2>Choose a Class by Start Date</h2>
      <h3 onClick={showAll}>All Students</h3>
      <hr />
      <ul className="cohorts-season">
        {uniqueSeasons.map((cohort, index) => {
          return (
            <Cohort
              key={index}
              cohort={cohort}
              students={students}
              setStudents={setStudents}
              allStudents={allStudents}
              setCohort={setCohort}
            />
          );
        })}
      </ul>
      {/* Implementing Dark Mode */}
      <div className={theme}>
        <button onClick={toggleTheme}>{buttonText}</button>
      </div>
    </div>
  );
}
