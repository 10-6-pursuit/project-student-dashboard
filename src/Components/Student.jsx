import StudentDetails from './StudentDetails.jsx'

export default function Student({ student }) {

  const {
    profilePhoto,
    names: { preferredName, middleName, surname },
    username,
    dob
   } = student;

  return (
    <li className="student-card">
      <div className="student-card-upper">
        <img className="avatar" src={profilePhoto} />
        <div className="student-info">
          <h3 className="student-name">{preferredName} {middleName[0]}. {surname}</h3>
          <span>{username}</span>
          <br />
          <span>
            <span className="green">Birthday: </span>{dob}
          </span>
        </div>
        <span>On Track to Graduate</span>
        <span className="green detail-toggle">Show More...</span>
      </div>
      <StudentDetails />
    </li>
  )
}