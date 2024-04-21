import './StudentCard.scss';
import { useState } from 'react';
import ShowMore from '../ShowMore/ShowMore';

export default function StudentCard({ student, addNote, isGridView }) {
  const [expand, setExpand] = useState(false);
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
      setExpand(false);
    } else {
      setStats(null);
      setExpand(true);
    }
  }

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
    <div className={`StudentCard ${isGridView ? 'grid-view' : 'list-view'}`}>
      <div className={`student-info`}>
        <div>
          <img src={student.profilePhoto} alt="Student profile photo" />
        </div>
        {!isGridView ? (
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
              {expand ? 'Show Less' : 'Show More...'}
            </p>
            {expand && <ShowMore student={student} addNote={addNote} />}
          </div>
        ) : null}
      </div>
      {stats}
    </div>
  );
}
