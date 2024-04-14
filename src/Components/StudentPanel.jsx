import Students from './Students.jsx'

export default function StudentPanel({ selectedCohort,
  filteredStudentList,
  handleAddNote
 }) {
  
  return (
    <section className="student-list">
      <h2>{selectedCohort}</h2>
      <span>
        <span className="green">Total Students: </span>{filteredStudentList.length}
      </span>
      <Students
        filteredStudentList={filteredStudentList}
        handleAddNote={handleAddNote} />
    </section>
  )
}