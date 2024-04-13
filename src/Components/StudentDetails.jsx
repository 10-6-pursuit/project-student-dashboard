import Codewars from './Codewars.jsx'
import Scores from './Scores.jsx'
import Certifications from './Certifications.jsx'
import Notes from './Notes.jsx'

export default function StudentDetails() {

  return (
    <section className="student-details">
      <div className="student-progress">
        <Codewars />
        <Scores />
        <Certifications />
      </div>
      <hr className="green"/>
      <Notes />
    </section>
  )
}