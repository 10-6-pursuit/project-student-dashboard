import Students from './Students.jsx'

export default function StudentPanel() {

  return (
    <section className="student-list">
      <h2>Selected Cohort Name</h2>
      <span>
        <span className="green">Total Students: </span>#STUDENTS
      </span>
      <Students />
    </section>
  )
}