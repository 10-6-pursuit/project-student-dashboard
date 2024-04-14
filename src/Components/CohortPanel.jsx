import Cohorts from './Cohorts.jsx'

export default function CohortPanel({ cohorts, handleCohortSelect }) {
  
  return (
  <section className="cohort-panel">
    <h2>Choose a Class by Start Date</h2>
    <div>
        <h3
          className="cohort-name"
          id="AllStudents"
          onClick={handleCohortSelect}
        >All Students</h3>
        <hr />
    </div>
    <Cohorts
      cohorts={cohorts}
      handleCohortSelect={handleCohortSelect} />
  </section>
  )
}