import { useState } from "react";

export default function Note({ notes }) {
  const [studentNote, setStudentNote] = useState(notes);
  const [newCommenter, setNewCommenter] = useState("");
  const [newComment, setNewComment] = useState("");

  //Handle Commenter
  function handleClick(e) {
    if (newCommenter.length > 0 && newComment.length > 0) {
      setStudentNote([
        ...studentNote,
        {
          commenter: newCommenter,
          comment: newComment,
        },
      ]);
    }
  }

  //Handle Comment
  function handleCommenter(e) {
    setNewCommenter(e.target.value);
  }

  function handleComment(e) {
    setNewComment(e.target.value);
  }

  function resetForm() {
    setNewCommenter(""), setNewComment("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    resetForm();
  }

  return (
    <div className="note">
      <hr />
      <h3 className="note-title">1-on-1 Notes</h3>
      <section className="form-note">
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <fieldset>
              <label htmlFor="comment-name">
                Comment Name
                <input
                  type="text"
                  id="comment-name"
                  name="comment-name"
                  value={newCommenter}
                  onChange={handleCommenter}
                  required
                />
              </label>

              <label htmlFor="comment">
                Comment
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  value={newComment}
                  onChange={handleComment}
                  required
                />
              </label>
              <input
                className="submit"
                type="submit"
                value="Add Note"
                onClick={handleClick}
              />
            </fieldset>
          </div>
        </form>
      </section>
      <ul>
        {studentNote.map((note, index) => {
          return (
            <li key={index}>
              {note.commenter} says, "{note.comment}"
            </li>
          );
        })}
      </ul>
    </div>
  );
}
