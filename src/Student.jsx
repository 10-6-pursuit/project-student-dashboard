import { useState } from "react";
import MoreInfo from "./MoreInfo.jsx";


export default function Student({student, addNote}){

   // const [studentState, setStudent] = useState(student);
    const [showMore, setShowMore] = useState(false);


    function changeDateFormat(date){
        
        const localeOptions = {dateStyle: 'long'}

        const dateTimezone = new Date(date).toLocaleString('en-US', localeOptions)
        const dateWithoutTimezone = new Date(new Date(date).toISOString().slice(0,-1)).toLocaleString('en-US', localeOptions)
        return dateTimezone;

    }

    
    const isStudentOnTrack = student.certifications.resume && student.certifications.linkedin && student.certifications.github && student.certifications.mockInterview && student.codewars.current.total > 600 // --> true/false


    const { id, names:{preferredName, middleName, surname}, username, dob, profilePhoto} = student;
    return(
        <li>
            <img src={profilePhoto} alt={`${preferredName}'s headshot`} />
            <p>{preferredName} {middleName[0].toUpperCase()}. {surname}</p>
            <p>{username}</p>
            <p>Birthday: {changeDateFormat(dob)}</p>
            {isStudentOnTrack && <p>On Track to Graduate</p>}

            <a onClick={() => setShowMore(!showMore)} 
            href="#">{showMore ? "show Less" : "show More"}</a>
        
        {showMore && <MoreInfo student={student} addNote={addNote}/>}
        </li>
    )
}

// true && true && true && true && true // --> true
// true && true && false && true && true // --> false