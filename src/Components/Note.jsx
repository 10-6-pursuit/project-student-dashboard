import { useState } from "react";

export default function Note({ notes }) {
  //Got the student notes, now le'ts add state to it to update it when we submit our note form
  // console.log(notes)
  //Pass Notes props as state to update, allowing to add more notes

  const [studentNote, setStudentNote] = useState(notes);
  const [newCommenter, setNewCommenter] = useState("");
  const [newComment, setNewComment] = useState("");
  //!Now When creating a new note from form add that our our studentNote by adding it to our setStudentNote.

  //!Steps: Get input values and pass this to a new object and push that to our Notes array, remember to copy it.
  //Handle Commenter
  function handleClick(e) {
    setStudentNote([
      ...studentNote,
      {
        commenter: newCommenter,
        comment: newComment,
      },
    ]);
  }

  //Handle Comment
  function handleCommenter(e) {
    setNewCommenter(e.target.value);
  }

  function handleComment(e) {
    setNewComment(e.target.value);
  }

  //Handle AddNotes

  //Handle Reset Form
  function resetForm() {}

  //Handle Submit
  function handleSubmit(e) {
    e.preventDefault();
    // resetForm();
  }

  //Pass values for each input. Ex: note.commenter || note.comment

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
