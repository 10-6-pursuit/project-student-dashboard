import { useState } from "react";
import ShowMoreInfo from "./ShowMoreInfo.jsx";
import "./Student.css";

export default function Student({student,addNote}){

    const [showMore,setShowMore] = useState(false);

    const {profilePhoto,username,dob,names:{preferredName,middleName,surname}} = student;
    
    const canGraduate = student.certifications;//newArray array constructor<<

    const onTrack = Object.values(canGraduate);

    const codeWars = student.codewars.current.total > 600 ? true : false;

    onTrack.push(codeWars);
    

    return(
        <div className="practice">
        <div className="students-list__students">
        <img src = {profilePhoto}/><li className="students-list__student"><h2 className="students-list__student__name">{`${preferredName} ${middleName.slice(0,1)}. ${surname}`}</h2><p className="students-list__student__name">{username}</p><p className="students-list__student__name"><span>Birthday</span>: {new Date(dob).toLocaleDateString('en-US', {year:"numeric",month:"long",day:"numeric"})}</p>

        <a onClick={()=>setShowMore(!showMore)} href="#">{showMore ? "Show less..." : "Show more..."}</a>
        <p>{onTrack.every(requirements => requirements) ? <span>"On Track to Graduate"</span>: null}</p>
        </li>
        </div>
        {showMore && <ShowMoreInfo addNote = {addNote} student = {student}/>}
        </div>
    )
}