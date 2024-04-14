import { useState } from 'react';

export default function NoteForm({ id, handleAddNote }) {
  const [ noteForm, setNoteForm ] = useState({
    commenter: "",
    comment: ""
  })

  function handleInputChange(e) {
    setNoteForm({...noteForm, [e.target.id]: e.target.value})
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleAddNote(id, noteForm)
    setNoteForm({
      commenter: "",
      comment: ""
    })
  }

  return(
    <form className="note-form"
      onSubmit={handleFormSubmit}
    >
      <fieldset>
        <label
          htmlFor="commenter"
        >Commenter Name: </label>
        <input
          type="text"
          id="commenter"
          value={noteForm.commenter}
          onChange={handleInputChange}
          required/>
        <br />
        <label
          htmlFor="comment"
        >Commenter: </label>
        <input
          type="text"
          id="comment"
          value={noteForm.comment}
          onChange={handleInputChange}
          required/>
        <br />
        <button type="submit">Add Note</button>
      </fieldset>
    </form>
  )
}