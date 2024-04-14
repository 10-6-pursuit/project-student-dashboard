import StudentDetails from './StudentDetails.jsx'

export default function Student({ student }) {

  const {
    profilePhoto,
    names: { preferredName, middleName, surname },
    username,
    dob,
    certifications
  } = student;

  // convert dob
  const event = new Date(dob);
  const options = {
  month: "long",
  day: "numeric",
  year: "numeric"
  }
  const dobFormatted = event.toLocaleDateString('en-US', options)

  // is on track
  const isOnTrack = Object.values(certifications).every(cert => cert);

  return (
    <li className="student-card">
      <div className="student-card-upper">
        <img className="avatar" src={profilePhoto} />
        <div className="student-info">
          <h3 className="student-name">{preferredName} {middleName[0]}. {surname}</h3>
          <span>{username}</span>
          <br />
          <span>
            <span className="green">Birthday: </span>{dobFormatted}
          </span>
        </div>
        <span>{isOnTrack ? "On Track to Graduate" : null}</span>
        <span className="green detail-toggle">Show More...</span>
      </div>
      <StudentDetails student={student} />
    </li>
  )
}