import { useState } from "react";

export default function Note({ notes }) {

  //Pass Notes props as state to update, allowing to add more notes
  // const [useNote, setUseNotes] = useState(notes);


  //Handle Commenter

  //Handle Comment

  //Handle AddNotes


  //Handle Submit
  function handleSubmit(e) {
    e.preventDefault();
    //Function to add Notes to existing Notes array
    //Function to reset Input Fields
  }

  return (
    <div className="note">
      <hr />
      <section className="form-note">
        <h3>1-on-1 Notes</h3>
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

              <button>Add Note</button>
            </fieldset>
          </div>
        </form>
      </section>
      <ul>
        {/* Map the updated notes here, to display them */}
      </ul>
    </div>
  );
}
