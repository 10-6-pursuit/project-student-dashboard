import Codewars from './Codewars.jsx'
import Scores from './Scores.jsx'
import Certifications from './Certifications.jsx'
import NotesSection from './NotesSection.jsx'

export default function StudentDetails({ student, handleAddNote }) {
  const {
    codewars,
    cohort: { scores },
    certifications,
    notes,
    id
  } = student;

  return (
    <section className="student-details">
      <div className="student-progress">
        <Codewars
          codewars={codewars} key={id+"codewars"} />
        <Scores
          id={id}
          scores={scores} />
        <Certifications
          id={id}
          certifications={certifications} />
      </div>
      <hr className="green"/>
      <NotesSection
        notes={notes}
        id={id}
        handleAddNote={handleAddNote} />
    </section>
  )
}