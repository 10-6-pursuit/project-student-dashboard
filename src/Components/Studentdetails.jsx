// import { useState } from "react";

// function Studentdetails({ student }) {

//     const [notes, setNotes] = useState(student.notes);

//     const [comments, setComments] = useState({
//         commenter: "",
//         comment: ""
//     });

//     function handleTextChange(event) {
//         setComments({...comments, [event.target.id]: event.target.value})
//     };

//     function addNotes(event) {
//         event.preventDefault();
//         setNotes([...notes, comments]);
//         setComments({
//             commenter: "",
//             comment: ""
//         })
//     }

//     const [show, setShow] = useState("Show More...");

//     const [showDetails, setShowDetails] = useState(false);


//     function toggleDetails() {
//         if (showDetails === "none") {
//             setShowDetails("block")
//             setShow("Show Less...")
//         } else {
//             setShowDetails("none")
//             setShow("Show More...")
//         }
//     }

//     return (
//         <div className="studentDetails">
//             <div className="studentDetails__showMoreBtn">
//                 <span onClick={toggleDetails}> {show}</span>

//             </div>
//             <div style={{display: showDetails}}>
//                 <div className="studentDetails__card">
//                     <div className="studentDetails__card-codeWars">
//                         <h3>Codewars</h3>
//                         <div><span>Current Total:</span> {student.codewars.current.total}</div>
//                         <div><span>Last Week:</span> {student.codewars.current.lastWeek}</div>
//                         <div><span>Goal:</span> {student.codewars.goal.total}</div>
//                         <div><span>Percent of Goal Achieved:</span></div>
//                     </div>
//                     <div className="studentDetails__card-score">
//                         <h3>Scores</h3>
//                         <div><span>Assignments:</span> {student.cohort.scores.assignments * 100}%</div>
//                         <div><span>Projects:</span> {student.cohort.scores.projects * 100}%</div>
//                         <div><span>Assessments:</span> {student.cohort.scores.assessments * 100}%</div>

//                     </div>
//                     <div className="studentDetails__card-certifications">
//                         <h3>Certifications</h3>
//                         <div><span>Resume:</span> {student.certifications.resume ? "✅" : "❌"} </div>
//                         <div><span>LinkedIn:</span> {student.certifications.linkedin ? "✅" : "❌"}</div>
//                         <div><span>Mock Interview:</span> {student.certifications.mockInterview ? "✅" : "❌"}</div>
//                         <div><span>Github:</span> {student.certifications.github ? "✅" : "❌"}</div>
//                     </div>
//                 </div>
//                 <hr />
//                 <div className="studentDetails__form">
//                     <p>1-on-1 Notes</p>
//                     <form onSubmit={addNotes}>
//                         <label>Commenter Name< Input onChange={handleTextChange} type="text" id="commenter" value={comments}
//                         </label>
//                         <br />
//                         <label>Comment<input onChange={handleTextChange} type="text" id="comment" value={comments}
//                         </label>
//                         <br />
//                         <div className="studentDetails__form-btn-container">
//                             <input className="studentDetails__form-btn" type="submit" name="Add Note"/>

//                         </div>
//                     </form>
//                     <ul>
//                         {notes.map(element => <li>{element.commenter} says, {element.comment}</li>)}
//                     </ul>
//                 </div>
//             </div>
//         </div>

                         
//     )
                    
// }

// export default Studentdetails;

import React, { useState } from "react";

function Studentdetails({ student }) {
    const [notes, setNotes] = useState(student.notes);
    const [comments, setComments] = useState({ commenter: "", comment: "" });
    const [showDetails, setShowDetails] = useState(false);

    function handleTextChange(event) {
        const { id, value } = event.target;
        setComments({ ...comments, [id]: value });
    }

    function addNotes(event) {
        event.preventDefault();
        setNotes([...notes, comments]);
        setComments({ commenter: "", comment: "" });
    }

    function toggleDetails() {
        setShowDetails(!showDetails);
    }

    return (
        <div className="studentDetails">
            <div className="studentDetails__showMoreBtn">
                <span onClick={toggleDetails}>{showDetails ? "Show Less..." : "Show More..."}</span>
            </div>
            {showDetails && (
                <div>
                    <div className="studentDetails__form">
                        <p>1-on-1 Notes</p>
                        <form onSubmit={addNotes}>
                            <label>
                                Commenter Name
                                <input onChange={handleTextChange} type="text" id="commenter" value={comments.commenter} />
                            </label>
                            <br />
                            <label>
                                Comment
                                <input onChange={handleTextChange} type="text" id="comment" value={comments.comment} />
                            </label>
                            <br />
                            <div className="studentDetails__form-btn-container">
                                <input className="studentDetails__form-btn" type="submit" value="Add Note" />
                            </div>
                        </form>
                        <ul>
                            {notes.map((element, index) => (
                                <li key={index}>{element.commenter} says, {element.comment}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Studentdetails;
