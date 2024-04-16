import { useState } from 'react';
import StudentPanelHeader from './StudentPanelHeader.jsx'
import Students from './Students.jsx'

export default function StudentPanel({        selectedCohort,
  setSortBy,
  setSortDirection,
  filteredStudentList,
  cohortSymbols,
  handleAddNote
}) {

  return (
    <section className="student-panel">
      <StudentPanelHeader
        selectedCohort={selectedCohort}
        setSortBy={setSortBy}
        setSortDirection={setSortDirection}
        filteredStudentList={filteredStudentList} />
      <Students
        filteredStudentList={filteredStudentList}
        cohortSymbols={cohortSymbols}
        handleAddNote={handleAddNote} />
    </section>
  )
}