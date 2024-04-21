
import { useState } from "react";
import React from "react";
 
export default function StudentDetails ( {singleStudent}) {

  
    return (
        <div className="Style">
            <h1>Codewars</h1>
           
          <p>Current Total: {singleStudent.codewars.current.total}</p>

          <p>last Week: {singleStudent.codewars.current.LastWeek}</p>

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
            <p>Resume: {singleStudent.certifications.resume ? "✅" : "❌"} </p>

            <p>LinkedIn: {singleStudent.certifications.linkedin ? "✅": "❌"} </p>

            <p>Mock Interview: {singleStudent.certifications.mockInterview ? "✅" : "❌"} </p>

            <p>GitHub: {singleStudent.certifications.github ? "✅" : "❌"} </p>


          </div>
          <h2>1-on-1 Notes</h2>
          
              <h2>{singleStudent.names.preferredName} {singleStudent.names.surname}</h2>
              {singleStudent.notes.map((notes,notesIndex) => (
                <div key={notesIndex}>
                  <p>Commenter Name:{notes.commenter}</p>
                  <p> Comment:{notes.comment}</p>
                 </div>
                
              ))}
         
           <input type ="text" placeholder ="Add Note"/>

          
        </div>
        
     
    )
}

