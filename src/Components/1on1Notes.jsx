import { useState } from "react";
export default function OneOnOneNotes ({student}){

    const [notes, setNotes] = useState(student.notes);
    const [newComment, setNewComment] = useState({
        commenter: "",
        comment: ""
      })
      
    
      function addComment(newComment) {
        setNotes([...notes, newComment]);
        notes.push(newComment);
      }

      
      function handleTextChange(e) {
        setNewComment({
          ...newComment,
          [e.target.id]: e.target.value,
        });
      }

      
      function handleSubmit(e) {
        e.preventDefault();
        addComment(newComment);
        resetCommentForm();
      }

      function resetCommentForm(){
        setNewComment({
            commenter: "",
            comment: ""
        })
      }

    return(
        <>
        <div>
            <h3>1-on-1 Notes</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="commenter-name">Commenter Name </label><input id="commenter" type="text" onChange={handleTextChange} value={newComment.commenter} required></input><br/>
                <label htmlFor="comment">Comment </label><input id="comment" type="text" onChange={handleTextChange} value={newComment.comment} required></input><br/>
                <button type="submit">Add Note</button>
            </form>
            <div>Numbers of notes: {student.notes.length}</div>
            <div className="comment-list">
            {notes.map(({commenter, comment}, i) => <li key={i}>{commenter}: {comment} </li>)}
            </div>
        </div>
        </>
    )
}