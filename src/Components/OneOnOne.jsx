import { useState } from "react";
import "./OneOnOne.css"

export default function OneOnOne({student,addNote}){

    const [newComment,setNewComment] = useState({
        commenter:"",
        comment:"",
    });

    function handleChange(e){
        setNewComment({
            ...newComment,
            [e.target.id]: e.target.value,})
    }

    function resetForm(){
        setNewComment({
              commenter: "",
              comment: "",
            })
          }

    function handleSubmit(e){
        e.preventDefault();
        addNote(student, newComment);
        resetForm();
    }

    return(
    <>
        <h2 id="oneonone-heading">1-on-1 Notes</h2>
        <div className="comments-styles">
        <form onSubmit={handleSubmit}>
            <label>Commenter Name</label>
            <input name="commenterName" id="commenter" value={newComment.commenter} onInput={handleChange} type="text"/><br/>
            <label>Comment</label>
            <input onChange={handleChange} name="comment" id="comment" type="text" value={newComment.comment}/><br/>
            <input id="submitbutton" type="submit" value="Add Note"/>
        </form>
        </div>
        <ul>
            {student.notes.map(({commenter, comment}, index) => <li className="comments" key={`${student.id}-${commenter}-${comment}`}>{`${commenter} says, "${comment}"`}</li>)}
        </ul>
    </>
    )
}