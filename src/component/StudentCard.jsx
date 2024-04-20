import { useState } from "react";
import OneOnOne from "./OneOnOne";
import ScoreCard from "./ScoreCard";
export default function StudentCard({ student,addComment,key}) {
  // const [showMore, setShowMore] = useState(``);
  const [showMoreBool, setShowMoreBool] = useState(false);
  function formatDate(dateString) {
    // Split the date string into day, month, and year
    const parts = dateString.split("/");
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);

    // Create a Date object with the provided values
    const formattedDate = new Date(year, month - 1, day);

    // Get the month name
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[formattedDate.getMonth()];

    // Construct the final formatted date string
    const formattedDateString = monthName + " " + day + ", " + year;

    return formattedDateString;
  }
  // function toggleShow(arg) {
  //   if(arg&&!showMoreBool){
  //    setShowMore(arg);
  //    setShowMoreBool(true)
  //   }
  //   if(arg&&showMoreBool){
  //    setShowMore(``);
  //    setShowMoreBool(false)
  //   }
    
  //  }

  return (

    <li className="student-element" key={key}>
      <img src={student.profilePhoto} alt={`Pic`} />
      <div>
        <h3>
          {student.names.preferredName}{" "}
          {student.names.middleName[0].toUpperCase()}. {student.names.surname}
        </h3>
        <p>{student.username}</p>
        <p>
          <span>Birthday:</span> {formatDate(student.dob)}
        </p>
        <button  onClick={()=>setShowMoreBool(!showMoreBool)} className="show-more" id={student.id}>{showMoreBool?`Show Less...`:`Show More...`}</button>
        
       {showMoreBool?<>
        <ScoreCard student={student}/>
        <br />
        <hr />
        
        <OneOnOne student={student} addComment={addComment}/></>:null}
      </div>
      <div className="on-track">
        {student.certifications.resume&&student.certifications.linkedin&&student.certifications.github&&student.certifications.mockInterview&&student.codewars.current.total>600?`On Track to Graduate`:null
            
        }
   
       
      </div>
    </li>
  );
}
