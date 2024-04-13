import NoteForm from './NoteForm.jsx'
import Notes from './Notes.jsx'


export default function NotesSection() {

  return (
    <div className="student-notes">
      <h3>1-On-1 Notes</h3>
      <span>
        Total Notes: <span className="green">#NOTES</span>
      </span>
      <NoteForm />
      <Notes />
    </div>
  )
}