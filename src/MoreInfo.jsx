import OneOnOne from "./OneOnOne.jsx";


export default function MoreInfo({setStudents, student, notes, scores, certifications, codewars, studentArr, indx}) {


    return (
        <div>
            Codewars: 
            <br />
            <ul id="codeW" className="codeWarsList">
                <li><span>Current Total:</span> { codewars.current.total }</li>
                <li><span>Last Week: </span> 
                { codewars.current.lastWeek }</li>
                <li><span>Goal:</span> { codewars.goal.total }</li>
                <li><span>Percent of Goal Achieved: { Math.round(codewars.current.total / codewars.goal.total * 100)}% </span> </li>
            </ul>
            <br />
            Scores 
            <br />
            <ul id="scoresL" className="scoresList">
                <li><span>Assignments:</span> { scores.assignments }</li>
                <li><span>Projects:</span> { scores.projects }</li>
                <li><span>Assessments:</span> { scores.assessments }</li>
            </ul>
            <br />
            Certifications 
            <br />
            <ul id="certs" className="certsList">
                <li><span>Resume:</span> {certifications.resume ? "✅" : "❌"}</li>
                <li><span>LinkedIn:</span> {certifications.linkedin ? "✅" : "❌"}</li>
                <li><span>Mock Interview:</span> {certifications.mockInterview ? "✅" : "❌"}</li>
                <li><span>Github:</span> {certifications.github ? "✅" : "❌"}</li>
            </ul>
            <OneOnOne studentArr={studentArr} indx={indx} setStudents={setStudents} notes={notes} />
        </div>
    )
}