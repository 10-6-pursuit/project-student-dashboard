import OneOnOneNotes from "./1on1Notes"
export default function StudentExtraInfo ({student}) {
    return(
        <>
            <div className="extra-info">
                <section>
                    <h3>Codewars</h3>
                    <li>Current Total: <span>{student.codewars.current.total}</span></li>
                    <li>Last Week: <span>{student.codewars.current.lastWeek}</span></li>
                    <li>Goal: <span>{student.codewars.goal.total}</span></li>
                    <li>Percent of Goal Achieved: <span>{Math.round((student.codewars.current.total / student.codewars.goal.total)*100)}%</span></li>
                </section>
                <section>
                    <h3>Scores</h3>
                    <li>Assignments: <span>{student.cohort.scores.assignments * 100}%</span></li>
                    <li>Projects: <span>{student.cohort.scores.projects * 100}%</span></li>
                    <li>Assessments: <span>{student.cohort.scores.assessments * 100}%</span></li>
                </section>
                <section>
                    <h3>Certifications</h3>
                    <li>Resume:{student.certifications.resume ? "✅" : "❌"}</li>
                    <li>LinkedIn:{student.certifications.linkedin ? "✅" : "❌"}</li>
                    <li>Mock Interview:{student.certifications.mockInterview ? "✅" : "❌"}</li>
                    <li>GitHub:{student.certifications.github ? "✅" : "❌"}</li>
                </section>
            </div>
            <div className="one-on-one">
                <hr/>
                <OneOnOneNotes student={student}/>
            </div>
        </>
    )
}