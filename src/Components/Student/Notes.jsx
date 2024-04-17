import Note from './Note.jsx'

export default function Notes({ notes, id }) {

  return (
    <ul className="notes">
      {notes.map((note, idx) => (
        <Note
          note={note}
          key={id+"noteId"+(idx).toString().padStart(2,"0")} />
      ))}
    </ul>
  )
}