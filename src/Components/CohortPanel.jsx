import Cohorts from './Cohorts.jsx'

export default function CohortPanel({ cohorts, selectedCohort, handleCohortSelect }) {
  
  return (
  <section className="cohort-panel">
    <h2 className="cohort-panel-header">Choose a Class by Start Date</h2>
    <div>
        <h3
          className="cohort-name"
          style={"All Students" === selectedCohort ? {color: "green"} : null}
          id="AllStudents"
          onClick={handleCohortSelect}
        >All Students</h3>
        <hr />
    </div>
    <Cohorts
      cohorts={cohorts}
      selectedCohort={selectedCohort}
      handleCohortSelect={handleCohortSelect} />
  </section>
  )
}