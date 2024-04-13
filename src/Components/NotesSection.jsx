import NoteForm from './NoteForm.jsx'


export default function NotesSection() {

  return (
    <div className="student-notes">
      1-On-1 Notes
      <NoteForm />
      <ul className="notes">
        <li>COMMENTER N. says "NOTE"</li>
      </ul>
    </div>
  )
}