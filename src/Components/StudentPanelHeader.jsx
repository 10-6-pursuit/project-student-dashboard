export default function StudentPanelHeader({ selectedCohort, filteredStudentList }) {
  return (
    <div className="student-panel-header">
      <h2>{selectedCohort}</h2>
      <span>
        Total Students: <span className="green">{filteredStudentList.length}</span>
      </span>
    </div>
  )
}