export default function StudentList() {

  return (
    <section className="student-list">
      <h2>Selected Cohort Name</h2>
      <span>
        <span className="green">Total Students: </span>numStudents
      </span>
      <div className="student-card">
        <div className="avatar" src="">avatar</div>
        <h3>First M. Last</h3>
        <span>studentEmail</span>
        <br />
        <span>
          <span className="green">Birthday:</span> studentBirthday
        </span>
        <br />
        <span className="green">Show More...</span>
      </div>
    </section>

  )
}