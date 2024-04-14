import Student from './Student.jsx'

export default function Students({ filteredStudentList }) {

  return(
    <ul className="student-list">
      {filteredStudentList.map(student => (
        <Student student={student} key={student.id} />
      ))}
    </ul>
  )
}