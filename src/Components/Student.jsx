import StudentExtraInfo from "./StudentExtraInfo";
import { useState } from "react";
export default function Student ({student}) {

    const [showInfo, setShowInfo] = useState(false);

    function toggleInfo(){
        setShowInfo(!showInfo)
        console.log(showInfo)
    }

    return (
        <>
         <div className="student"> 
            <img src={student.profilePhoto}></img>
            <section className="student-info">
                <div className="student-name">{student.names.preferredName} {student.names.middleName[1].toUpperCase()}. {student.names.surname}</div>
                <div>{student.username}</div>
                <div><span>Birthday:</span> {student.dob}</div>
            </section>
            <button className="show-more" onClick={toggleInfo}>{!showInfo ? "Show more..." : "Show less..."}</button>

            {showInfo ? <StudentExtraInfo student={student}/>
            : null}
            </div>
        </>
    )
}