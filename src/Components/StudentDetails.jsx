import Codewars from './Codewars.jsx'
import Scores from './Scores.jsx'
import Certifications from './Certifications.jsx'
import NotesSection from './NotesSection.jsx'

export default function StudentDetails() {

  return (
    <section className="student-details">
      <div className="student-progress">
        <Codewars />
        <Scores />
        <Certifications />
      </div>
      <hr className="green"/>
      <NotesSection />
    </section>
  )
}