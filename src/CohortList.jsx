import { useState } from "react";

export default function CohortList({students, setStudents, handleCohortChange}) {

    const allCohorts = students.map((student) => student.cohort);

    const uniqueCohorts = allCohorts.filter((cohort, index, self) =>
    index === self.findIndex((currCohort) => (
        currCohort.cohortCode === cohort.cohortCode
    )))

    uniqueCohorts.sort(function(a,b){
        return new Date(b.cohortStartDate) - new Date(a.cohortStartDate);
      });

    return (
        <div>
            <p>Choose a class by Start Date</p>
        <ul>
            <li onClick={handleCohortChange}>All Students</li>
            {uniqueCohorts.map((cohort) => 
            <li id={cohort.cohortCode} onClick={handleCohortChange}>
                {cohort.cohortCode.replace("2", " 2")}
            </li>
            )}
        </ul>
        </div>
    )
}