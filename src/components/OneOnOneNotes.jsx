import React, { useState } from "react";
import "/src/styles/1on1Notes.css";

export default function OneOnOneNotes({ addComment }) {
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commenterName.trim() !== "" && comment.trim() !== "") {
      if (commenterName.split(" ").length !== 2) {
        setError(true);
        return;
      }

      addComment(commenterName, comment);
      setCommenterName("");
      setComment("");
      setError(false);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCommenterName(value);
  };

  return (
    <div>
      <hr />
      <h4>1-on-1 Notes</h4>
      <fieldset className="one-on-one-fieldset">
        <form className="one-on-one-form" onSubmit={handleSubmit}>
          <label className="one-on-one-form__label" htmlFor="commenter-name">
            <span className="one-on-one-form__label__title">
              Commenter Name
            </span>
            <input
              className="one-on-one-form__input"
              type="text"
              id="commenter-name"
              value={commenterName}
              onChange={handleChange}
              required
            />
            <span className="error-box">
              {error ? "Please enter first and last name only" : null}
            </span>
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
      </fieldset>
    </div>
  );
}
