import { useState } from "react";
import MoreInfo from "./MoreInfo.jsx";

export default function Student({student, setStudents, studentArr, indx}) {

const [showMore, setShowMore] = useState(false);

const { notes, certifications, cohort:{scores}, codewars, id, names:{ preferredName, middleName, surname }, userName, dob, profilePhoto} = student;

const {assignments, projects, assessments} = scores;

function handleShowMore(e) {
    e.preventDefault();
    setShowMore(!showMore);
}


    return (
        <li>
            <img src={ profilePhoto } alt="profilePhoto" />
            <p>{ preferredName }</p>
            <p>{ userName }</p>
            <p>{ dob }</p>
            <a onClick={handleShowMore} href="#">{showMore ? "Show Less" : "Show More"}</a>
            {showMore && <MoreInfo studentArr={studentArr} setStudents={setStudents}certifications={certifications} scores={scores} codewars={codewars} notes={notes} student={student} indx={indx}/>} 
        </li>
    )
}