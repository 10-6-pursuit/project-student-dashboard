export default function NoteForm() {

  return(
    <form className="notes-form">
      <fieldset>
        <label htmlFor="commenterName">Commenter Name: </label>
        <input type="text" id="commenterName" required/>
        <br />
        <label htmlFor="comment">Commenter: </label>
        <input type="text" id="comment" required/>
        <br />
        <button type="submit">Add Note</button>
      </fieldset>
    </form>
  )
}