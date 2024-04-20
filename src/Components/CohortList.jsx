import "./CohortList.css";

export default function Cohorts({ cohortSelection, cohortStudents, filterStudents }) {
  return (
    <>
      <h1 id="cohorts2">Choose a Class by Start Date</h1>
      <ul>
        <li
          className={`cohorts ${cohortSelection === "All Students" ? "selected" : ""}`}
          id="allstudents"
          onClick={filterStudents}
        >
          All Students
        </li>
        {cohortStudents.map(cohort => (
          <li
            className={`cohorts ${cohortSelection === cohort ? "selected" : ""}`}
            id={cohort}
            onClick={(e) => filterStudents(e)}
            key={cohort}
          >
            {cohort.split("20").join(" 20")}
          </li>
        ))}
      </ul>
    </>
  );
}
