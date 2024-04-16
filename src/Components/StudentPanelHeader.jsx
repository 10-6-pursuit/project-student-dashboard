import { useState } from 'react';

export default function StudentPanelHeader({ selectedCohort,
  filteredStudentList,
  setSortBy,
  setSortDirection,
  handleStudentSort
}) { 
  const [ sortForm, setSortForm ] = useState({
    "sortBy": "none",
    "direction": "undefined"
  })
  
  function handleStudentSort() {

    // setSortBy(sortForm.sortBy);
    // setSortDirection(sortForm.direction);
    console.log(sortForm.sortBy)
    console.log(sortForm.direction)
  }

  return (
    <div className="student-panel-header">
      <h2>{selectedCohort}</h2>
      <span>
        Total Students: <span className="green">{filteredStudentList.length}</span>
      </span>
      <form>
        <select
          name="sortBy"
          value={sortForm.sortBy}
          onChange={(e) => handleStudentSort(e.target.id)} id="sort-by">
          <option value="none">--Sort By--</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
        </select>
        <span> </span>
        <select
        name="direction"
        value={sortForm.direction}
        onChange={(e) => handleStudentSort(e.target.id)} id="direction">
          <option value="">--Direction--</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </form>
    </div>
  )
}