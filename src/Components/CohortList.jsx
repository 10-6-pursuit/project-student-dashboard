import { useState } from "react";
import Cohort from "./Cohort"
export default function CohortList({students}) {
    
    const uniqueCohorts = students.map(student => student.cohort.cohortCode).filter((cohort, index, array ) => array.indexOf(cohort) === index);

    return(
    <>
        <div className="cohortlistcontainer">
            <h2>Choose a Class By Start Date</h2>
            <button className="all-students">All Students</button><hr/>
            {uniqueCohorts.map(cohort => <div><Cohort cohort={cohort.replace("2", " 2")} /></div>
            )}
        </div>
    </>
)
}