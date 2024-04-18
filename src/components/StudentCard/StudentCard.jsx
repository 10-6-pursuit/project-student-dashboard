import './StudentCard.scss';
import { useState } from 'react';
import Notes from '../Notes/Notes';

export default function StudentCard({ student, addNote }) {
  const [expand, setExpand] = useState(true);
  const [stats, setStats] = useState(null);

  // Convert student DOB format
  function convertDateFormat(dateStr) {
    let dateComponents = dateStr.split('/');
    let month = Number(dateComponents[0]);
    let day = Number(dateComponents[1]);
    let year = Number(dateComponents[2]);

    let date = new Date(year, month - 1, day);

    let options = { month: 'long', day: 'numeric', year: 'numeric' };
    let formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
  }

  // Show More.../Show Less
  // Show student stats
  function handleClick() {
    if (expand) {
      showMore();
      setExpand(false);
    } else {
      setStats(null);
      setExpand(true);
    }
  }

  const showMore = () => {
    setStats(
      <>
      <div className="stats">
        <div className="codewars">
          <h4>CodeWars</h4>
          <ul>
            <li>
              <span>Current Total:</span> {student.codewars.current.total}
            </li>
            <li>
              <span>Last Week:</span> {student.codewars.current.lastWeek}
            </li>
            <li>
              <span>Goal:</span> {student.codewars.goal.total}
            </li>
            <li>
              <span>Percent of Goal:</span>{' '}
              {Math.round(
                (student.codewars.current.total /
                  student.codewars.goal.total) *
                  100
              )}
              %
            </li>
          </ul>
        </div>
        <div className="scores">
          <h4>Scores</h4>
          <ul>
            <li>
              <span>Assignments:</span>{' '}
              {student.cohort.scores.assignments * 100}%
            </li>
            <li>
              <span>Projects:</span> {student.cohort.scores.projects * 100}%
            </li>
          </ul>
        </div>
        <div className="certifications">
          <h4>Certifications</h4>
          <ul>
            <li>
              <span>
                Resume: {student.certifications.resume ? '✅ ' : '❌'}
              </span>
            </li>
            <li>
              <span>
                LinkedIn: {student.certifications.linkedin ? '✅ ' : '❌'}
              </span>
            </li>
            <li>
              <span>
                Mock Interview: {student.certifications.github ? '✅ ' : '❌'}
              </span>
            </li>
            <li>
              <span>
                GitHub: {student.certifications.mockInterview ? '✅ ' : '❌'}
              </span>
            </li>
          </ul>
        </div>
        <hr />
        </div>
        <hr />
      <Notes student={student} addNote={addNote} />
      </>
    );
  };

  const OnTrackStatus = () => {
    if (
      student.certifications.resume == true &&
      student.certifications.linkedin == true &&
      student.certifications.github == true &&
      student.certifications.mockInterview == true &&
      student.codewars.current.total >= 600
    ) {
      return <p className="on-track-status">On Track to Graduate</p>;
    } else {
      return <p className="on-track-status">Off Track to Graduate</p>;
    }
  };

  return (
    <div className="StudentCard">
      <div className="student-info">
        <div>
          <img src={student.profilePhoto} alt="Student profile photo" />
        </div>
        <div className="width-100">
          <div className="student-info__name">
            <h3>
              {`${
                student.names.preferredName
              }  ${student.names.middleName.slice(0, 1)}. ${
                student.names.surname
              }`}
            </h3>
            <OnTrackStatus />
          </div>
          <p>{student.username}</p>
          <p>
            <span>Birthday: </span>
            {convertDateFormat(student.dob)}
          </p>
          <br />
          <p className="expand" onClick={handleClick}>
            {expand ? 'Show More...' : 'Show Less'}
          </p>
        </div>
      </div>
      {stats}
    </div>
  );
}
