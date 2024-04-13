 
 import { useState } from "react";
 import React from "react";
 import StudentDetails from "./StudentDetails";
//  import CohortList from "./Components/CohortList";
 
 export default function Student({singleStudent}) {

    console.log(singleStudent);

    function getFullNameWithInitials({preferredName, middleName, surname}) {

        const firstNameInitial = preferredName.charAt(0).toUpperCase() + preferredName.slice(1);
        const middleNameInitial = middleName.charAt(0).toUpperCase();
      
        const fullNameWithInitials = `${firstNameInitial}${middleNameInitial ? ' ' + middleNameInitial + '.' : ''} ${surname}`;
      
        return fullNameWithInitials;
      }


    return (
    <div>
        <h1>
            {getFullNameWithInitials(singleStudent.names)}
        </h1>
         <p>
            {singleStudent.username}
         </p>
         <p>{singleStudent.dob}</p>
         <img src= {singleStudent.profilePhoto}  ></img>
          <StudentDetails singleStudent ={singleStudent}> </StudentDetails>
    </div>
    )

 }
 