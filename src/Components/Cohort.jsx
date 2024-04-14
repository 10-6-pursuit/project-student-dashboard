export default function Cohort({ cohortCode, selectedCohort, handleCohortSelect }) {

  return (
    <div className="cohort">
        <h3
          className="cohort-name"
          id={cohortCode}
          onClick={handleCohortSelect}
          style={cohortCode.replace("2", " 2") === selectedCohort ? {color: "green"} : null}
        >{cohortCode.replace("2", " 2")}</h3>
        <hr />
    </div>
  )
}