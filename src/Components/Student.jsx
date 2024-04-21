 
 import { useState } from "react";
 import React from "react";
 import StudentDetails from "./StudentDetails";
//  import CohortList from "./Components/CohortList";
 
 export default function Student({singleStudent}) {

  const[showDetails, setShowDetails] = useState(false);

    console.log(singleStudent);

    
    function calculateDate({dob}) {
      let today = new Date();
      let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
      
      if (today > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
      }
      
      return {
        month: nextBirthday.getMonth() + 1, 
        day: nextBirthday.getDate(),
        year: nextBirthday.getFullYear()
      };
    }
    
    let dob = new Date("1979-02-02");
    let nextBirthday = calculateDate({dob});
    
    // let countdownElement = document.getElementById("countdown");
    // countdownElement.innerHTML = `Next dob: ${nextBirthday.month}/${nextBirthday.day}/${nextBirthday.year}`;
    
  

    function getFullNameWithInitials({preferredName, middleName, surname}) {

        const firstNameInitial = preferredName.charAt(0).toUpperCase() + preferredName.slice(1);
        const middleNameInitial = middleName.charAt(0).toUpperCase();
      
        const fullNameWithInitials = `${firstNameInitial}${middleNameInitial ? ' ' + middleNameInitial + '.' : ''} ${surname}`;
      
        return fullNameWithInitials;
      }


    return (
    <div className="Student">
      <img src= {singleStudent.profilePhoto}  ></img>
       <div className="nameStyle"> 
        <h1>
            {getFullNameWithInitials(singleStudent.names)}
        </h1>
         <p>
            {singleStudent.username}
         </p>
         <p>{singleStudent.dob}</p>
         
         <p onClick={ () => setShowDetails(!showDetails)}>{showDetails ? "Show Less.." : "Show More.."}</p>
          
         
          {showDetails ?<StudentDetails singleStudent ={singleStudent}/> : null} 
    </div>
    </div>
    )

 }