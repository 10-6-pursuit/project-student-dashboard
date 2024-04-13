import Codewars from './Codewars.jsx'
import Scores from './Scores.jsx'

export default function StudentDetails() {

  return (
    <section className="student-details">
      <div className="student-progress">
        <Codewars />
        <Scores />
        <div className="Certifications">
          <h4>Certifications:</h4>
        </div>
      </div>
      <hr className="green"/>
      <div className="student-notes">
        1-On-1 Notes
      </div>
    </section>
  )
}