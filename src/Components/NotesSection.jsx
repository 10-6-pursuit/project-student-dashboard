import NoteForm from './NoteForm.jsx'
import Notes from './Notes.jsx'


export default function NotesSection() {

  return (
    <div className="student-notes">
      1-On-1 Notes
      <NoteForm />
      <Notes />
    </div>
  )
}