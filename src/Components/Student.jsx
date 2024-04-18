import StudentExtraInfo from "./StudentExtraInfo";
import { useState } from "react";
export default function Student ({ student }) {
    
    const [showInfo, setShowInfo] = useState(false);
    const { resume, linkedin, github, mockInterview } = student.certifications;
    const { preferredName, surname, middleName  } = student.names;

    function dateConverter (dob) {
        let date = dob.split("/");

        const months = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December" ];

        date[0] = months[date[0] - 1];

        return date.join(",");
    }

    function toggleInfo() {
        setShowInfo(!showInfo);
    }

    return (
        <>
            <div className="student"> 
                <img src={student.profilePhoto}></img>
                <div className="on-track">{resume && linkedin && github && mockInterview && student.codewars.current.total > 600 ? <div>On Track to Graduate</div> : <div className="off-track">Off Track to Graduate</div>}</div>
                <section className="student-info">
                    <div className="student-name">{preferredName} {middleName[1].toUpperCase()}. {surname}</div>
                    <div>{student.username}</div>
                    <div><span>Birthday:</span> {dateConverter(student.dob).replace("," , " ")}</div>
                </section>
                <button className="show-more" onClick={toggleInfo}>{!showInfo ? "Show more..." : "Show less..."}</button>

                {showInfo ? <StudentExtraInfo student={student}/> : null}
                
            </div>
        </>
    )
}