
import Note from './Note.jsx'

export default function Notes({ notes }) {

  return (
    <ul className="notes">
      {notes.map((note) => (
        <Note note={note} />
      ))}
    </ul>
  )
}