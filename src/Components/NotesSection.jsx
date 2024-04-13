export default function NotesSection() {

  return (
    <div className="student-notes">
      1-On-1 Notes
      <form className="notes-form">
        <fieldset>
          <label htmlFor="commenter-name">Commenter Name: </label>
          <input type="text" id="commenterName" required/>
          <br />
          <label htmlFor="comment">Commenter: </label>
          <input type="text" id="comment" required/>
          <br />
          <button type="submit">Add Note</button>
        </fieldset>
      </form>
      <ul className="notes">
        <li>COMMENTER N. says "NOTE"</li>
      </ul>
    </div>
  )
}