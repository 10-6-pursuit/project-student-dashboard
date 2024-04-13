
import { useState } from "react";
import React from "react";
 
export default function StudentDetails ( {singleStudent}) {
    return (
        <div>
            <h1>Codewars</h1>
           
          <p>Current Total: {singleStudent.codewars.current.total}</p>

          <p>last Week: {singleStudent.codewars.current.lastWeek}</p>

          <p>Goal: {singleStudent.codewars.goal.total} </p>

          <p>Percent Of Goal Achieved: {((singleStudent.codewars.current.total /singleStudent.codewars.goal.total) * 100 ).toFixed(2)} % </p>

          <div>
        <h1>Scores</h1>
            <p>Assignment:{singleStudent.cohort.scores.assignments * 100 }% </p>
            
            <p>Projects: {singleStudent.cohort.scores.projects * 100 }% </p>

            <p>Assessments: {singleStudent.cohort.scores.assessments * 100} % </p>
          </div>

          <div>
            <h1>Certifications</h1>
            <p>Resume: {singleStudent.certifications.resume ? "checkmark" : "X"} </p>

            <p>LinkedIn: {singleStudent.certifications.linkedin ? "checkmark": "X"} </p>

            <p>Mock Interview: {singleStudent.certifications.mockInterview ? "checkmark" : "X"} </p>

            <p>GitHub: {singleStudent.certifications.github ? "checkmark" : "X"} </p>


          </div>
        </div>
     
    )
}

