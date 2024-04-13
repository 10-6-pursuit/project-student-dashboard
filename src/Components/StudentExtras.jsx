import Note from "./Note";

export default function StudentExtras({
  studentID,
  codewars,
  certifications,
  scores,
  notes
}) {

  //Deconstruct codewars object
  const { current, goal } = codewars;
  const { total: currentTotal, lastWeek: currentLastWeek } = current;
  const { total: goalTotal, lastWeek: goalLastWeek } = goal;

  const percentGoal = Math.round((currentTotal / goalTotal) * 100);

  // Deconstruct scores object
  const {
    assignments: assignment,
    projects: project,
    assessments: assessment,
  } = scores;

  //Deconstruct certifications object
  const{resume: isResume, linkedin: isLinked, github: isGithub, mockInterview: isMockInterview} = certifications

  return (
    <div className="extras">
      <div className="extra-info" key={studentID}>
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
              {assignment * 100}%
            </li>
            <li>
              <span>Projects: </span>
              {project * 100}%
            </li>
            <li>
              <span>Assessments:</span>
              {assessment * 100}%
            </li>
          </ul>
        </div>
        <div className="certifications">
          <h3>Certifications:</h3>
          <ul>
            <li>
              {/* Pass Boolean argument and add emjoi according to true or false */}
              <span>Resume: </span>
              {isResume ? "✅" : "❌"}
            </li>
            <li>
              <span>LinkedIn: </span>
              {isLinked ? "✅" : "❌"}
            </li>
            <li>
              <span>Mock Interview: </span>
              {isMockInterview ? "✅" : "❌"}
            </li>
            <li>
              <span>Github: </span>
              {isGithub ? "✅" : "❌"}
            </li>
          </ul>
        </div>
      </div>
      <Note notes={notes}/>
    </div>
  );
}
