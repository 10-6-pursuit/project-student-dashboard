import { useState, useEffect } from 'react';
import StudentPanelHeader from './StudentPanelHeader.jsx'
import Students from './Students.jsx'

export default function StudentPanel({ selectedCohort,
  filteredStudentList,
  cohortSymbols,
  handleAddNote
}) {
  const [ studentSort, setStudentSort ] = useState(filteredStudentList);
  const [ sortBy, setSortBy ] = useState(false)

  function handleStudentSort() {
    setSortBy(!sortBy);
  }

  useEffect(() =>{
    setStudentSort(filteredStudentList)
  }, [filteredStudentList])

  useEffect(() => {
    console.log(studentSort)
    const newSort = [...studentSort].sort((a, b) => a.names.preferredName.toLowerCase() - b.names.preferredName.toLowerCase());

    console.log(newSort)
    setStudentSort([...newSort]);
  }, [sortBy])
  
  return (
    <section className="student-panel">
      <StudentPanelHeader
        selectedCohort={selectedCohort}
        studentSort={studentSort}
        handleStudentSort={handleStudentSort} />
      <Students
        studentSort={studentSort}
        cohortSymbols={cohortSymbols}
        handleAddNote={handleAddNote} />
    </section>
  )
}