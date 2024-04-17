import React from "react";

const Sidebar = ({ cohorts, onSelectCohort }) => {
  return (
    <div className="sidebar">
      <h2>Choose a Class by Start Date</h2>
      <ul>
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