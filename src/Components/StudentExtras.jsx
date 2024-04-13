export default function StudentExtras({studentID, codewars, certifications, scores}) {
  //!Need state type boolean for the certifications
  //!Need a function to decide what emoji to add depending if certification: if true add check, if false add x

  //Deconstruct codewars object
  const {current, goal} = codewars;
  const {total: currentTotal, lastWeek: currentLastWeek} = current;
  const {total: goalTotal, lastWeek: goalLastWeek} = goal;

 const percentGoal = Math.round(((currentTotal / goalTotal) * 100));


  return (
    //! For Each ul pass along the data as props
    <div className="extra-info" key={studentID}>

      <div className="codewars">
        <h3>CodeWars:</h3>
        <ul>
          <li><span>Current Total: </span>{currentTotal}</li>
          <li><span>Last Week: </span>{currentLastWeek}</li>
          <li><span>Goal: </span>{goalTotal}</li>
          <li><span>Percent of Goal Achieved: </span>{percentGoal}%</li>
        </ul>
      </div>

      <div className="scores">
        <h3>Scores</h3>
        <ul>
          <li><span>Assignment:</span></li>
          <li><span>Projects:</span></li>
          <li><span>Assessments:</span></li>
        </ul>
      </div>

      <div className="certifications">
        <h3>Certifications:</h3>
        <ul>
          <li><span>Resume:</span></li>
          <li><span>LinkedIn:</span></li>
          <li><span>Mock Interview:</span></li>
          <li><span>Github:</span></li>
        </ul>
      </div>

    </div>
  )
}