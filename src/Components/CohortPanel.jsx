import Cohort from './Cohort.jsx'

export default function CohortPanel() {

  return (
    <section className="cohort-panel">
      <h2>Choose a Class by Start Date</h2>
      <div className="cohort-list">
        <Cohort />
        <Cohort />
        <Cohort />
      </div>
    </section>

  )
}