 
 import { useState } from "react";
 import React from "react";
//  import CohortList from "./Components/CohortList";
 
 export default function Student({singleStudent}) {

    console.log(singleStudent);

    function getFullNameWithInitials({preferredName, middleName, surname}) {

        const firstNameInitial = preferredName.charAt(0).toUpperCase();
        const middleNameInitial = middleName.charAt(0).toUpperCase();
      
        const fullNameWithInitials = `${firstNameInitial}${middleNameInitial ? ' ' + middleNameInitial + '.' : ''} ${surname}`;
      
        return fullNameWithInitials;
      }


    return (
    <div>
        <h1>
            {getFullNameWithInitials(singleStudent.names)}
        </h1>
    </div>
    )

 }
 