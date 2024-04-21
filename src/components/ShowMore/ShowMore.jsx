import './ShowMore.scss';
import Notes from '../Notes/Notes';

export default function ShowMore({ student, addNote }) {
  return <>
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
              (student.codewars.current.total / student.codewars.goal.total) *
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
            <span>Assignments:</span> {student.cohort.scores.assignments * 100}%
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
            <span>Resume: {student.certifications.resume ? '✅ ' : '❌'}</span>
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
  </>;
}
