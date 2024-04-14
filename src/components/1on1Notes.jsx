import React, { useState } from "react";

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
      <h3>1-on-1 Notes</h3>
      <form className="one-on-one-form" onSubmit={handleSubmit}>
        <label htmlFor="commenter-name">
          Commenter Name:
          <input
            type="text"
            id="commenter-name"
            value={commenterName}
            onChange={(e) => setCommenterName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="comment">
          Comment:
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
