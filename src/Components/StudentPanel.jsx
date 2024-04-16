import { useState } from 'react';
import StudentPanelHeader from './StudentPanelHeader.jsx'
import Students from './Students.jsx'

const sortMethod = {
  "none": {
    "ascending": {method: (a, b) => null},
    "descending": {method: (a, b) => null}
    },
  "firstName": {
    "ascending": {method: (a, b) => a.names.preferredName.toLowerCase().localeCompare(b.names.preferredName.toLowerCase())},
    "descending": {method: (a, b) => b.names.preferredName.toLowerCase().localeCompare(a.names.preferredName.toLowerCase())},
  }
}

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