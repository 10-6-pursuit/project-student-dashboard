import { useState } from "react";

export default function CohortList({students}) {

    const [heading, setHeading] = useState("Cohort List");

    const allCohorts = students.map((student) => student.cohort);

    const uniqueCohorts = allCohorts.filter((cohort, index, self) =>
    index === self.findIndex((currCohort) => (
        currCohort.cohortCode === cohort.cohortCode
    )))

    uniqueCohorts.sort(function(a,b){
        return new Date(b.cohortStartDate) - new Date(a.cohortStartDate);
      });

      function handleCohortChange(e) {
        
      }

    return (
        <div>
        <h1>{heading}</h1>
        <ul>
            {uniqueCohorts.map((cohort) => 
            <li onClick={(e) => {
                setHeading(e.target.innerText)

            }}>
                {cohort.cohortCode.replace("2", " 2")}
            </li>
            )}
        </ul>
        <span>Total Students: {students.length}</span>
        </div>
    )
}