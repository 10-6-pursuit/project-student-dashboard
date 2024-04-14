import StudentPanelHeader from './StudentPanelHeader.jsx'
import Students from './Students.jsx'

export default function StudentPanel({ selectedCohort,
  filteredStudentList,
  handleAddNote
 }) {
  
  return (
    <section className="student-panel">
      <StudentPanelHeader
        selectedCohort={selectedCohort}
        filteredStudentList={filteredStudentList} />
      <Students
        filteredStudentList={filteredStudentList}
        handleAddNote={handleAddNote} />
    </section>
  )
}