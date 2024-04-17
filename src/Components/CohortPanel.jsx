import Cohorts from './Cohorts.jsx'

export default function CohortPanel({
  cohorts,
  selectedCohort,
  cohortSymbols,
  handleCohortSelect
}) {
  
  return (
  <section className="cohort-panel">
    <h2 className="cohort-panel-header">Choose a Class by Start Date</h2>
    <div className="cohort">
        <h3
          className="cohort-name"
          style={"All Students" === selectedCohort ? {color: "green"} : null}
          id="AllStudents"
          onClick={handleCohortSelect}
        >All Students</h3>
        <h3 className="cohort-symbol">👩🏾‍🎓👨🏾‍🎓</h3>
    </div>
    <hr />
    <Cohorts
      cohorts={cohorts}
      selectedCohort={selectedCohort}
      cohortSymbols={cohortSymbols}
      handleCohortSelect={handleCohortSelect} />
  </section>
  )
}