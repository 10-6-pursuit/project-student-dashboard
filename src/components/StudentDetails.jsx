import { useState } from "react"
import "/src/components/StudentDetails.css"

export default function StudentDetails({student}) {
    
    const [notes, setNotes] = useState([])
    
    const [comments, setComments] = useState({
        commenter: "",
        comment: ""
    })
    
    function handleTextChange (e) {
        setComments({...comments, [e.target.id]: e.target.value})
    }
    
    function addNotes(e) {
        e.preventDefault()
        setNotes([...notes,comments])
        setComments({
            commenter: "",
            comment: ""
        })
    }

    const [shown, setShown] = useState("Show More...")

    const [showDetails, setShowDetails] = useState("none")

    function toggleDetails(){
        if(showDetails === "none") {
            setShowDetails("block")
            setShown("Show Less...")
        } else {
            setShowDetails("none")
            setShown("Show More...")
        }
    }

    return (
        <div className="studentDetails">
            <div className="studentDetails__showMoreButton">
                <span onClick={toggleDetails}>{shown}</span>
            </div>
            <div style={{display: showDetails}}>
                <div className="studentDetails__card">
                    <div className="studentDetails__card-codewars">
                        <h3>Codewars:</h3>
                        <div><span>Current Total:</span> {student.codewars.current.total}</div>
                        <div><span>Last Week:</span> {student.codewars.current.lastWeek}</div>
                        <div><span>Goal:</span> {student.codewars.goal.total}</div>
                        <div><span>Percent of Goal Achieved:</span> {Math.round(student.codewars.current.total/student.codewars.goal.total * 100)}%</div>
                    </div>
                    <div className="studentDetails__card-score">
                        <h3>Scores</h3>
                        <div><span>Assignments:</span> {student.cohort.scores.assignments * 100}%</div>
                        <div><span>Projects:</span> {student.cohort.scores.projects * 100}%</div>
                        <div><span>Assessments:</span> {student.cohort.scores.assessments * 100}%</div>
                    </div>
                    <div className="studentDetails__card-certification">
                        <h3>Certifications</h3>
                        <div><span>Resume:</span> {student.certifications.resume ? "✅" : "❌"}</div>
                        <div><span>LinkedIn:</span> {student.certifications.linkedin ? "✅" : "❌"}</div>
                        <div><span>Mock Interview:</span> {student.certifications.mockInterview ? "✅" : "❌"}</div>
                        <div><span>Github:</span> {student.certifications.github ? "✅" : "❌"}</div>
                    </div>
                </div>
                <hr />
                <div className="studentDetails__form">
                    <p>1-on-1 Notes</p>
                    <form onSubmit={addNotes}>
                        <label>Commenter Name<input onChange={handleTextChange} type="text" id="commenter" value={comments.commenter} />
                        </label>
                        <br />
                        <label>Comment<input onChange={handleTextChange} type="text" id="comment" value={comments.comment} />
                        </label>
                        <br />
                        <div className="studentDetails__form-button-container">
                        <input className="studentDetails__form-button" type="submit" value="Add Note" />
                        </div>
                    </form>
                    <ul>
                        {notes.map(ele => <li>{ele.commenter} says, "{ele.comment}"</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

/*
{
    "id": "D8-hEWB",
    "names": {
      "preferredName": "Israel",
      "middleName": "Benjamin",
      "surname": "Rodriguez"
    },
    "username": "israel.rodriguez@pursuit.org",
    "dob": "2/3/1979",
    "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48",
    "codewars": {
      "current": { "total": 1804, "lastWeek": 144 },
      "goal": { "total": 850, "lastWeek": 75 }
    },
    "certifications": {
      "resume": false,
      "linkedin": false,
      "github": false,
      "mockInterview": false
    },
    "notes": [
      {
        "commenter": "Alan R.",
        "comment": "Israel is a pleasure to work with!"
      }
    ],
    "cohort": {
      "cohortCode": "Winter2025",
      "cohortStartDate": "12/1/25",
      "scores": { "assignments": 0.71, "projects": 0.7, "assessments": 0.66 }
    }
  }
*/