import ScoreCard from "./ScoreCard";
import React, { useState } from 'react';



// const StudentCard = (props) =>
// {} --> props.student

// make a new var called student --> props.student
// student : {israel}
const StudentCard = ({ student }) => {
    const [show, setShow] = useState(false);




    function middleInitial(input){
        return `${input[0]}.`
        
    }
    function isOnTrack(student) {
        const { certifications, codewars } = student;
        return certifications.resume && certifications.linkedin &&
            certifications.github && certifications.mockInterview &&
            codewars.current.total > 600;
    }
    
    return (     
    <li key={student.id}>
        <img src={student.profilePhoto} alt={`Profile of ${student.names.preferredName}`} />
        <div className="container">
            <h2>{`${student.names.preferredName} ${middleInitial(student.names.middleName)} ${student.names.surname}`}</h2>
            <p>Email: {student.username}</p>
            <p>Birthday: {student.dob}</p>
            <a onClick={() => setShow(!show)}>{show ? "Show Less" : "Show More"}</a>
            <p>Status: {isOnTrack(student) ? 'On Track' : 'Off Track'}</p>
            {show && <ScoreCard student={student} something={"Ari"} cohort={10.6}/>}
            {/*show ? <Scorecard student={student} /> : null*/}
        </div>
    </li> 

    )
}



export default StudentCard

