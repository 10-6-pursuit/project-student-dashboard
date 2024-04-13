import OneOnOne from "./OneOnOne.jsx";


export default function MoreInfo({student, notes, scores, certifications, codewars}) {

    // const { resume, linkedin, github, mockInterview } = certifications;
console.log(certifications);

    return (
        <div>
            Codewars: <br />
            <ul id="codeW" className="codeWarsList">
                <li>Current Total: { codewars.current.total }</li>
                <li>Last Week: { codewars.current.lastWeek }</li>
                <li>Goal:{ codewars.goal.total }</li>
            </ul>
            <br />
            Scores <br />
            <ul id="scoresL" className="scoresList">
                <li>Assignments: { scores.assignments }</li>
                <li>Projects: { scores.projects }</li>
                <li>Assessments: { scores.assessments }</li>
            </ul>
            <br />
            Certifications <br />
            <ul>
                <li>Resume: {certifications.resume}</li>
                <li>LinkedIn: {certifications.linkedin}</li>
                <li>Mock Interview: {certifications.mockInterview}</li>
                <li>Github: {certifications.github}</li>
            </ul>
            <OneOnOne notes={notes} />
        </div>
    )
}