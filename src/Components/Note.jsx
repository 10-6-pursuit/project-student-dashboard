import { useState } from "react";

export default function Note({ notes, studentID, appendNotes}) {
  
  const [studentNote, setStudentNote] = useState({
    commenter: "",
    comment: "",
  })

  function handleNote(e) {
    setStudentNote({
      ...studentNote,
      [e.target.id]: e.target.value
    });
  }

  function resetForm(){
    setStudentNote({
      commenter: "",
      comment: "",
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    appendNotes(studentNote, studentID);
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
              <label htmlFor="commenter">
                Comment Name
                <input
                  type="text"
                  id="commenter"
                  name="commenter"
                  value={studentNote.commenter}
                  onChange={handleNote}
                  required
                />
              </label>

              <label htmlFor="comment">
                Comment
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  value={studentNote.comment}
                  onChange={handleNote}
                  required
                />
              </label>
              <input
                className="submit"
                type="submit"
                value="Add Note"
              />
            </fieldset>
          </div>
        </form>
      </section>
      <ul>
        {notes.map((note, index) => {
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
