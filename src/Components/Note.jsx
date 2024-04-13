import { useState } from "react";

export default function Note({ notes }) {
  //Got the student notes, now le'ts add state to it to update it when we submit our note form
  console.log(notes)
  //Pass Notes props as state to update, allowing to add more notes

  const[newNote, setNewNote] = useState(notes);

  //Handle Commenter

  //Handle Comment


  //Handle AddNotes

  //Handle Reset Form


  //Handle Submit
  function handleSubmit(e) {
    e.preventDefault();
    //Add rest function
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
                  // value={useNote.commenter}
                  // onChange={handleCommenter}
                />
              </label>

              <label htmlFor="comment">
                Comment
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  // value={useNote.comment}
                  // onChange={handleComment}
                />
              </label>
              <input className="submit" type="submit" value="Add Note"/>
            </fieldset>
          </div>
        </form>
      </section>
      <ul>
        {newNote.map((note, index)=> {
          return (
            <li key={index}>{note.commenter} says, "{note.comment}"</li>
          )
        })}
      </ul>
    </div>
  );
}
