// const ScoreCard = (props) => {
    // props.student
const ScoreCard = ({student, something, cohort}) => {
    
return (
    <div className="ScoreCard">
        <h3>Codewars:</h3>
        <p>Current Total:{student.codewars.current.total}</p>
        <p>Last Week: {student.codewars.current.lastWeek}</p>
        <p>Goal: {student.codewars.goal.total}</p>
        <p>Percent of Goal Achieved: {student.codewars.current.total / student.codewars.goal.total * 100}</p>
        <h3>Scores</h3>
        <p>Assignments: {student.cohort.scores.assignments}</p>
        <p>Projects: {student.cohort.scores.projects}</p>
        <p>Assessments: {student.cohort.scores.assessments}</p>
        <h3>Certifications</h3>
        <p>Resume: {student.certifications.resume ? "v" : "x"}</p>
        <p>LinkedIn: {student.certifications.linkedin ? "v" : "x"}</p>
        <p>Mock Interview: {student.certifications.mockInterview ? "v" : "x"}</p>
        <p>GitHub: {student.certifications.github ? "v" : "x"}</p>
        
    </div>
)

}



export default ScoreCard