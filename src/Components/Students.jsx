import Student from './Student.jsx'

export default function Students({ studentSort,
  cohortSymbols,
  handleAddNote }) {

  return(
    <ul className="student-list">
      {studentSort.map(student => (
        <Student
          student={student}
          cohortSymbols={cohortSymbols}
          handleAddNote={handleAddNote}
          key={student.id} />
      ))}
    </ul>
  )
}