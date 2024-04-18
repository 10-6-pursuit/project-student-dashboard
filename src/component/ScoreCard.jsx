export default function ScoreCard( {student}){
    return(
        <div className="scorecard-container">
            <div className="codewars-container">
                <h3>Codewars

                </h3>
                <p> <span>Current Total:</span>  {student.codewars.current.total}</p>
                <p><span>Last Week:</span>  {student.codewars.current.total}</p>
                <p><span>Goal:</span>  {student.codewars.goal.total}</p>
                <p><span>Percent of Goal Achieved:</span> {Math.round(student.codewars.current.total/student.codewars.goal.total*100)}%</p>


            </div>
            <div className="scores-container">
                <h3>Scores

                </h3>
                <p><span>Assignments:</span> {student.cohort.scores.assignments*100}%</p>
                <p><span>Projects: </span>{student.cohort.scores.projects*100}%</p>
                <p><span>Assessments: </span>{student.cohort.scores.assessments*100}%</p>


            </div>
            <div className="certifications-container">
                <h3>Certifications

                </h3>
                <p><span>Resume: </span>{student.certifications.resume?"✅" : "❌"}</p>
                <p><span>LinkedIn: </span>{student.certifications.linkedin?"✅" : "❌"}</p>
                <p><span>Mock Interview: </span>{student.certifications.github?"✅" : "❌"}</p>
                <p><span>GitHub:</span> {student.certifications.mockInterview?"✅" : "❌"}</p>


            </div>
        </div>
    )
}