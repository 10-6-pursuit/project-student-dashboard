import StudentPanelHeader from './StudentPanelHeader.jsx'
import Students from './Students.jsx'

export default function StudentPanel({ selectedCohort,
  filteredStudentList,
  cohortSymbols,
  handleAddNote
 }) {
  
  return (
    <section className="student-panel">
      <StudentPanelHeader
        selectedCohort={selectedCohort}
        filteredStudentList={filteredStudentList} />
      <Students
        filteredStudentList={filteredStudentList}
        cohortSymbols={cohortSymbols}
        handleAddNote={handleAddNote} />
    </section>
  )
}