
import React, { useState } from 'react';


function CohortList({ students, handleCohortChange }) {

    const uniqueCohorts = [];

    for (let student of students) {
        if (!uniqueCohorts.includes(student.cohort.cohortCode)) {
            uniqueCohorts.push(student.cohort.cohortCode)
        }
        
    }
    
  



     return (
        <div className='cohortList__card'>
            <ul style={{ listStyle: 'none', padding: 0}}>
            {uniqueCohorts.map(cohortCode =><li onClick={handleCohortChange} style={{borderBottom: '3px solid green', padding: '5px 0'}}>{cohortCode.replace("2", " 2")}</li>)}
          </ul>
        </div>
     )


     
    }

export default CohortList;
