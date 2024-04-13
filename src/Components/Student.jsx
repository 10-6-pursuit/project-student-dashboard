import StudentDetails from './StudentDetails.jsx'

export default function Student() {

  return (
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
        <StudentDetails />
    </section>
  )
}