import {useState} from "react";
import "./1-on-1.css";

export default function OneOnOne({student}) {
    const [comments, setComments] = useState(student.notes);
    const [newComment, setNewComment] = useState({commenter: "", comment: ""});

    function handleAddComment(e) {
        setNewComment({...newComment,[e.target.id]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment({commenter: "", comment: ""})
    }    

    return (
        <div className="one-on-one">
            <h2>1-on-1 notes</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Commenter Name
                    <br/>
                    <input id="commenter" value={newComment.commenter} onChange={handleAddComment}/>
                </label>
                <br/>
                <label>
                    Comment
                    <br/>
                    <input value={newComment.comment} id="comment" onChange={handleAddComment}/>
                </label>
                <br/>
                <button className="add-note" type="submit">Add Note</button>
                <ul>
                    {comments.map(obj => <li>{obj.commenter} says, {obj.comment}</li>)}
                </ul>
            </form>
        </div>
    )
};