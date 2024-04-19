import { useState } from "react";
import { useRef } from 'react';


export default function OneOnOne({ id, comments, addNote }) {
    const commentorNameRef = useRef(null);
    const commentRef = useRef(null);

    const [commentsState, setComments] = useState(comments);


    const getComments = commentsState.map((eachComment) =>
        <li>{eachComment.commenter} says, "{eachComment.comment}"</li>);

    const [commentorName, setCommentorName] = useState("");
    const [commentAdded, setComment] = useState("");

    const onCommentorName = (commentorName, saveState) => {
        if (saveState) {
            setCommentorName(commentorName);
        }
        else {
            commentorNameRef.current.value = "";
        }
    };
    const onComment = (comment, saveState) => {
        if (saveState) {
            setComment(comment);
        }
        else {
            commentRef.current.value = "";
        }
    };

    const buttonClick = (e) => {
        addNote(id, commentorName, commentAdded);
        onCommentorName("", false);
        onComment("", false);
    }

    return (
        <div class="margin-20">
            <hr class="hr-color" />
            <h3>1-on-1 Notes</h3>
            <div class="solid-border">
                <div class="one-one">
                    <div> Commenter Name <input type="text" ref={commentorNameRef} value={commentorName} onChange={(e) => onCommentorName(e.target.value, true)}></input></div>
                    <div>  Comment <input type="text" ref={commentRef} value={commentAdded} onChange={(e) => onComment(e.target.value, true)}></input></div>
                    <div><button type="button" onClick={(e) => { buttonClick(e, commentorNameRef, commentRef) }} >Add Note</button></div>
                </div>
               
            </div>
            <ul>{getComments}</ul>
        </div>
    )
}