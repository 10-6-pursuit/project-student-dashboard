import Note from "./Note";

export default function StudentExtras({studentID, student, notes, students, appendNotes}) {
  const { current, goal } = student.codewars;
  const { total: currentTotal, lastWeek: currentLastWeek } = current;
  const { total: goalTotal, lastWeek: goalLastWeek } = goal;

  const percentGoal = Math.round((currentTotal / goalTotal) * 100);

  const { assignments, projects, assessments } = student.cohort.scores
  const { resume, linkedin, github, mockInterview } = student.certifications
  
  return (
    <div className="extras">
      <div className="extra-info" key={student.id}>
        <div className="codewars">
          <h3>CodeWars:</h3>
          <ul>
            <li>
              <span>Current Total: </span>
              {currentTotal}
            </li>
            <li>
              <span>Last Week: </span>
              {currentLastWeek}
            </li>
            <li>
              <span>Goal: </span>
              {goalTotal}
            </li>
            <li>
              <span>Percent of Goal Achieved: </span>
              {percentGoal}%
            </li>
          </ul>
        </div>
        <div className="scores">
          <h3>Scores</h3>
          <ul>
            <li>
              <span>Assignment: </span>
              {assignments * 100}%
            </li>
            <li>
              <span>Projects: </span>
              {projects * 100}%
            </li>
            <li>
              <span>Assessments:</span>
              {assessments * 100}%
            </li>
          </ul>
        </div>
        <div className="certifications">
          <h3>Certifications:</h3>
          <ul>
            <li>
              <span>Resume: </span>
              {resume ? "✅" : "❌"}
            </li>
            <li>
              <span>LinkedIn: </span>
              {linkedin ? "✅" : "❌"}
            </li>
            <li>
              <span>Mock Interview: </span>
              {mockInterview ? "✅" : "❌"}
            </li>
            <li>
              <span>Github: </span>
              {github ? "✅" : "❌"}
            </li>
          </ul>
        </div>
      </div>
      <Note notes={notes} studentID={studentID} students={students} appendNotes={appendNotes}/>
    </div>
  );
}
