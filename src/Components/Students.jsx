import Student from './Student.jsx'

export default function Students({ filteredStudentList,
  handleAddNote }) {

  return(
    <ul className="student-list">
      {filteredStudentList.map(student => (
        <Student
          student={student}
          handleAddNote={handleAddNote}
          key={student.id} />
      ))}
    </ul>
  )
}