import Student from './Student.jsx'

export default function Students({ studentList }) {

  return(
    <ul className="student-list">
      {studentList.map(student => (
        <Student student={student} key={student.id} />
      ))}
    </ul>
  )
}