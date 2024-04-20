import OneOnOne from "./OneOnOne.jsx";
import { useState } from "react";

export default function MoreInfo({ student, addNote }) {

    const [studentState, setStudent] = useState(student);

    const getGoalPercentage = function () {
        const total = studentState.codewars.current.total;
        const goal = studentState.codewars.goal.total;

        return parseInt((total * 100) / goal);
    }

    return (
        <>
            <div class="three-columns-grid">
                <div>
                    <h3>Codewars:</h3>
                    <div>Current Total: {studentState.codewars.current.total}</div>
                    <div>Last Week: {studentState.codewars.current.lastWeek}</div>
                    <div>Goal: {studentState.codewars.goal.total}</div>
                    <div>Percent of Goal Achieved: {getGoalPercentage()}%</div>
                </div>
                <div> <h3>Scores</h3>
                    <div>Assignments: {studentState.cohort.scores.assignments * 100} %</div>
                    <div>Projects: {studentState.cohort.scores.projects * 100} %</div>
                    <div>Assessments: {studentState.cohort.scores.assessments * 100} %</div>

                </div>
                <div> <h3>Certifications</h3>
                    <div>Resume: {studentState.certifications.resume?'\u2705':'\u274C'}</div>
                    <div>LinkedIn: {studentState.certifications.linkedin?'\u2705':'\u274C'}</div>
                    <div>Mock Interview: {studentState.certifications.mockInterview?'\u2705':'\u274C'}</div>
                    <div>GitHub: {studentState.certifications.github?'\u2705':'\u274C'}</div>
                </div>
            </div>
            <OneOnOne comments={studentState.notes} id={studentState.id} addNote={addNote}/>
        </>
    )
}