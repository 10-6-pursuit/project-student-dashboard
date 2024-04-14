import StudentDetails from './StudentDetails.jsx'

export default function Student({ student }) {
  console.log(student);

  return (
    <li className="student-card">
      <div className="student-card-upper">
        <div className="avatar" src="">avatar</div>
        <div className="student-info">
          <h3 className="student-name">FIRST M. LAST</h3>
          <span>EMAIL</span>
          <br />
          <span>
            <span className="green">Birthday:</span> BIRTHDAY
          </span>
        </div>
        <span>On Track to Graduate</span>
        <span className="green detail-toggle">Show More...</span>
      </div>
      <StudentDetails />
    </li>
  )
}