import NoteForm from './NoteForm.jsx'
import Notes from './Notes.jsx'


export default function NotesSection({ notes, id, handleAddNote }) {

  return (
    <div className="student-notes">
      <h3>1-On-1 Notes</h3>
      <span className="total-notes">
        Total Notes: <span className="green">{notes.length}</span>
      </span>
      <NoteForm
        id={id}
        handleAddNote={handleAddNote} />
      <Notes notes={notes} id={id} />
    </div>
  )
}