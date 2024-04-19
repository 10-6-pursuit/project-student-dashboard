import React from "react";

const Sidebar = ({ cohorts, onSelectCohort, setFilter, accessData}) => {
  function filterStudents (e) {
    setFilter(accessData.filter(student=> student.cohort.cohortCode === e.target.innerText))
  }
  return (
    <div className="sidebar">
      <h2>Choose a Class by Start Date</h2>
      <ul>
        {
          cohorts.map(term => <li onClick={(e)=>filterStudents(e)}>{term}</li>)
        }
        {/* <li onClick={() => onSelectCohort(null)}>All Students</li>
        {cohorts.map(cohort => (
          <li key={cohort.cohortCode} onClick={() => onSelectCohort(cohort.cohortCode)}>
            {cohort.cohortCode}
          </li> */}
        {/* ))} */}
      </ul>
    </div>
  );
};

export default Sidebar;