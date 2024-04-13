 
 import { useState } from "react";
 import React from "react"
 import data from "./data/data.json";
 import Students from "./Components/Students";
 
 import CohortList from "./Components/CohortList";

export default function App() {
  const[cohortList, setCohortList] = useState(data);
  
  return (
    <div>
      <h1>Student Dashboard</h1>
      
      <Students students={cohortList}/>
    


      <CohortList />
      {/* function cohortList () {
        const "names": {
          "preferredName": "Israel",
          "middleName": "Benjamin",
          "surname": "Rodriguez"
        },
        "username": "israel.rodriguez@pursuit.org",
        "dob": "2/3/1979",
        "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48",
        "codewars": 
      } */}
    </div>
    
    
    
  );
}
