export default function StudentExtras({studentID}) {
  //!Need state type boolean for the certifications
  //!Need a function to decide what emoji to add depending if certification: if true add check, if false add x

  return (
    //! For Each ul pass along the data as props
    <div className="extra-info" key={studentID}>

      <div className="codewars">
        <h3>CodeWars:</h3>
        <ul>
          <li><span>Current Total:</span></li>
          <li><span>Last Week:</span></li>
          <li><span>Goal:</span></li>
          <li><span>Percent of Goal Achieved:</span></li>
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