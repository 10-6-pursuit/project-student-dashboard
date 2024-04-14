import React, { useState } from "react";
import "/src/styles/1on1Notes.css";

export default function OneOnOneNotes({ addComment }) {
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commenterName.trim() !== "" && comment.trim() !== "") {
      addComment(commenterName, comment);
      setCommenterName("");
      setComment("");
    }
  };

  return (
    <div>
      <hr />
      <h3>1-on-1 Notes</h3>
      <form className="one-on-one-form" onSubmit={handleSubmit}>
        <label className="one-on-one-form__label" htmlFor="commenter-name">
          <span className="one-on-one-form__label__title">Commenter Name</span>
          <input
            className="one-on-one-form__input"
            type="text"
            id="commenter-name"
            value={commenterName}
            onChange={(e) => setCommenterName(e.target.value)}
            required
          />
        </label>
        <label className="one-on-one-form__label" htmlFor="comment">
          <span className="one-on-one-form__label__title">Comment</span>
          <input
            className="one-on-one-form__input"
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </label>
        <input
          className="one-on-one-form__submit-btn"
          type="submit"
          value={"Add Note"}
        />
      </form>
    </div>
  );
}
