export default function Cohort({ cohortCode, cohortName, handleCohortSelect }) {

  return (
    <div className="cohort">
        <h3
          className="cohort-name"
          id={cohortCode}
          onClick={handleCohortSelect}
        >{cohortCode.replace("2", " 2")}</h3>
        <hr />
    </div>
  )
}