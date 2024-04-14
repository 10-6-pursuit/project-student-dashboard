import NoteForm from './NoteForm.jsx'
import Notes from './Notes.jsx'


export default function NotesSection({ notes }) {

  return (
    <div className="student-notes">
      <h3>1-On-1 Notes</h3>
      <span>
        Total Notes: <span className="green">{notes.length}</span>
      </span>
      <NoteForm />
      <Notes />
    </div>
  )
}