import Codewars from './Codewars.jsx'

export default function StudentDetails() {

  return (
    <section className="student-details">
      <div className="student-progress">
        <Codewars />
        <div className="Scores">
          <h4>Scores:</h4>
        </div>
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