
import React, { useState } from 'react';


function CohortList({ students, handleCohortChange }) {
    //  const [heading, setHeading] = useState("Cohort List")

    //  const allCohort = students.map((student) => student)

    const uniqueCohorts = [];

    for (let student of students) {
        if (!uniqueCohorts.includes(student.cohort.cohortCode)) {
            uniqueCohorts.push(student.cohort.cohortCode)
        }
        
    }
    
  



     return (
        <div>
            <ul>
            {uniqueCohorts.map(cohortCode =><li onClick={handleCohortChange}>{cohortCode.replace("2", " 2")}</li>)}
          </ul>
        </div>
     )


     
    }




 

































// function CohortList({ cohortSelect}) {


//     const updateHeading = (event) => setHeading(event.target.innerText);


//     return (
//         <main>
//             <h2>{heading}</h2>
//             <div className="cohortList__card">
//                 <h2>All Students</h2>
//                 <ul>
//                     {cohortSelect.map((cohort, i) => (
//                         <li key={i}>
//                             <button type="button" onClick={() => updateHeading(cohort)}>
//                                 {cohort}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </main>
//     );
// }

export default CohortList;
