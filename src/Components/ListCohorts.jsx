import Cohort from "./Cohort";
import cohortsData from "../data/cohorts";

export default function ListCohorts({students}) {
  return (
    <div className="cohorts">
      <h2>Choose a Class by Start Date</h2>
      <h3>All Students</h3>
      <hr />
      <ul className="cohorts-season">
      {cohortsData.map((cohort, index) => {
        return (
          <Cohort cohort={cohort} key={index}/>
        )
      })}
      </ul>
    </div>
  );
}