import { useState } from 'react';
import StudentPanelHeader from './StudentPanelHeader.jsx'
import Students from './Students.jsx'

export default function StudentPanel({
  selectedCohort,
  sortBy,
  sortDirection,
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
        sortBy={sortBy}
        sortDirection={sortDirection}
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