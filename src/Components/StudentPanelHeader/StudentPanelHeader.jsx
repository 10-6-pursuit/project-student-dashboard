import './StudentPanelHeader.css'
import { useState } from 'react';

export default function StudentPanelHeader({ selectedCohort,
  sortBy,
  sortDirection,
  filteredStudentList,
  setSortBy,
  setSortDirection
}) {

  return (
    <div className="student-panel-header">
      <h2>{selectedCohort}</h2>
      <span>
        Total Students: <span className="green">{filteredStudentList.length}</span>
      </span>
      <form>
        <select
          name="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)} id="sort-by">
          {/* <option value="none">--Sort By--</option> */}
          <option value="id">ID</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="codewars">Total CW Points</option>
        </select>
        <span> </span>
        <select
        name="direction"
        value={sortDirection}
        onChange={(e) => setSortDirection(e.target.value)} id="direction">
          {/* <option value="">--Direction--</option> */}
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </form>
    </div>
  )
}