export default function StudentExtras({
  studentID,
  codewars,
  certifications,
  scores,
}) {
  //!Need state type boolean for the certifications
  //!Need a function to decide what emoji to add depending if certification: if true add check, if false add x

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
              <span>Resume:</span>
            </li>
            <li>
              <span>LinkedIn:</span>
            </li>
            <li>
              <span>Mock Interview:</span>
            </li>
            <li>
              <span>Github:</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="note">
        {/* move hr up if not shown */}
        <hr />
        <section className="form-note">
          <h3>1-on-1 Notes</h3>
          <form action="">
            <div className="inputs">
              <fieldset>
                <label htmlFor="comment-name">Comment Name
                  <input type="text" id="comment-name"name="comment-name" />
                </label>

                <label htmlFor="comment">Comment
                  <input type="text" id="comment" name="comment" />
                </label>

                <button>Add Note</button>
              </fieldset>
            </div>
          </form>
        </section>
        <ul>
          <li>Add Note Here</li>
        </ul>
      </div>
    </div>
  );
}
