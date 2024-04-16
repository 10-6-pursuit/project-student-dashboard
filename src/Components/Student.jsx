import { useState } from 'react'
import StudentDetails from './StudentDetails.jsx'

export default function Student({ student,
  cohortSymbols,
  handleAddNote }) {
  const [ showDetails, setShowDetails ] = useState(false);
  const { cohort: { cohortCode } } = student;
  const symbolDisplay = `${cohortSymbols[cohortCode.slice(0, -4)]}'${cohortCode.slice(-2)}`;

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

  function handleShowDetailsToggle(e) {
    e.preventDefault();
    setShowDetails(!showDetails);
  }

  return (
    <li className="student-card">
      <h4 className="card-cohort-symbol">{symbolDisplay}</h4>
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
        {isOnTrack ? <span>"On Track to Graduate 🎓"</span> : null}
        <a
          href="#"
          className="green detail-toggle"
          onClick={handleShowDetailsToggle}
        >Show {showDetails ? "Less" : "More"}...</a>
      </div>
      {showDetails ?
        <StudentDetails
          student={student}
          handleAddNote={handleAddNote} /> :
        null}
    </li>
  )
}