import Cohort from "./Cohort";
import cohortsData from "../data/cohorts";

export default function ListCohorts({students, setStudents, allStudents, setCohort}) {

  function showAll() {
    setStudents(allStudents);
    setCohort("All Students")
  }

  return (
    <div className="cohorts">
      <h2>Choose a Class by Start Date</h2>
      <h3 onClick={showAll}>All Students</h3> 
      <hr />
      <ul className="cohorts-season">
      {cohortsData.map((cohort, index) => {
        return (
          <Cohort key={index} cohort={cohort} students={students} setStudents={setStudents} allStudents={allStudents} setCohort={setCohort}/>
        )
      })}
      </ul>
    </div>
  );
}