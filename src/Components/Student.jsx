// import data from "./src/data/data.json";
import { useState } from "react";
import ShowMore from "./ShowMore.jsx";
import "./Student.css";
import OneOnOne from "./1-on-1.jsx";


export default function Student({student}) {

    const [showmore, setShowmore] = useState(false);
    const [showMoreText, setShowMoreText] = useState("Show More...");
    
    

    function handleShowMoreText() {
        if (showMoreText === "Show More...") {
            setShowMoreText("Show Less...")
        } else {
            setShowMoreText("Show More...")
        }
    }

    function handleShowmore() {
        setShowmore(!showmore);
        handleShowMoreText();
        
    }
    
    function createName (obj) {
        let name = obj.names.preferredName +" "+ obj.names.middleName[0]+". "+obj.names.surname;
        return name;
    }

    function formatDate (str) {
        let newDate = new Date(str);
        let formatDate = newDate.toLocaleDateString('eng-US', {dateStyle: "long"});
        return formatDate;
    }
    return (
        
            <li className="student-container">
                <img className="profile-pic" src={student.profilePhoto}/>
                <p className="name">{createName(student)}</p>
                <p className="username">{student.username}</p>
                <p className="bday">Birthday: <span className="format-date">
                {formatDate(student.dob)}</span></p>
                <p className="show-more" onClick={handleShowmore}>{showMoreText}</p>
                {showmore ? <ShowMore student={student}/> : null}
                {(student.certifications.resume === true && student.certifications.linkedin === true && student.certifications.github === true && student.certifications.mockInterview === true && student.codewars.current.total > 600) ? <p className="on-track">On Track To Graduate</p> : null}
            </li>
        
    );
};