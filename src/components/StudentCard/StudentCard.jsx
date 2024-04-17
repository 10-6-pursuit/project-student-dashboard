import './StudentCard.scss';
import { useState } from 'react';
import Notes from '../Notes/Notes';

export default function StudentCard({ students }) {
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
              <span>Current Total:</span> {students.codewars.current.total}
            </li>
            <li>
              <span>Last Week:</span> {students.codewars.current.lastWeek}
            </li>
            <li>
              <span>Goal:</span> {students.codewars.goal.total}
            </li>
            <li>
              <span>Percent of Goal:</span>{' '}
              {Math.round(
                (students.codewars.current.total /
                  students.codewars.goal.total) *
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
              {students.cohort.scores.assignments * 100}%
            </li>
            <li>
              <span>Projects:</span> {students.cohort.scores.projects * 100}%
            </li>
          </ul>
        </div>
        <div className="certifications">
          <h4>Certifications</h4>
          <ul>
            <li>
              <span>
                Resume: {students.certifications.resume ? '✅ ' : '❌'}
              </span>
            </li>
            <li>
              <span>
                LinkedIn: {students.certifications.linkedin ? '✅ ' : '❌'}
              </span>
            </li>
            <li>
              <span>
                Mock Interview: {students.certifications.github ? '✅ ' : '❌'}
              </span>
            </li>
            <li>
              <span>
                GitHub: {students.certifications.mockInterview ? '✅ ' : '❌'}
              </span>
            </li>
          </ul>
        </div>
        <hr />
        </div>
        <hr />
      <Notes students={students} />
      </>
    );
  };

  const OnTrackStatus = () => {
    if (
      students.certifications.resume == true &&
      students.certifications.linkedin == true &&
      students.certifications.github == true &&
      students.certifications.mockInterview == true &&
      students.codewars.current.total >= 600
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
          <img src={students.profilePhoto} alt="Student profile photo" />
        </div>
        <div className="width-100">
          <div className="student-info__name">
            <h3>
              {`${
                students.names.preferredName
              }  ${students.names.middleName.slice(0, 1)}. ${
                students.names.surname
              }`}
            </h3>
            <OnTrackStatus />
          </div>
          <p>{students.username}</p>
          <p>
            <span>Birthday: </span>
            {convertDateFormat(students.dob)}
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
