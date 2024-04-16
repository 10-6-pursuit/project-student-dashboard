export default function StudentPanelHeader({ selectedCohort,
  studentSort,
  handleStudentSort
}) {

  
  return (
    <div className="student-panel-header">
      <h2>{selectedCohort}</h2>
      <span>
        Total Students: <span className="green">{studentSort.length}</span>
      </span>
      <div>
        <button onClick={handleStudentSort}>Sort by First Name</button>
      </div>
    </div>
  )
}