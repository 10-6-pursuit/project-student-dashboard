export default function StudentList() {

  return (
    <section className="student-list">
      <h2>Selected Cohort Name</h2>
      <span>
        <span className="green">Total Students: </span>numStudents
      </span>
      <section className="student-card">
        <div className="student-card-upper">
          <div className="avatar" src="">avatar</div>
          <div className="student-info">
            <h3 className="student-name">First M. Last</h3>
            <span>studentEmail</span>
            <br />
            <span>
              <span className="green">Birthday:</span> studentBirthday
            </span>
          </div>
          <span>On Track to Graduate</span>
          <span className="green detail-toggle">Show More...</span>
        </div>
        <section className="details-section">
          <div className="student-details">
            Student Details
          </div>
          <hr className="green"/>
          <div className="student-notes">
            1-On-1 Notes
          </div>
        </section>
      </section>
    </section>

  )
}