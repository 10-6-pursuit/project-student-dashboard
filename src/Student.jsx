import { useState } from "react";
import MoreInfo from "./MoreInfo.jsx";

export default function Student({student, setStudents, studentArr, indx}) {

const [showMore, setShowMore] = useState(false);

const { notes, certifications, cohort:{scores}, codewars, id, names:{ preferredName, middleName, surname }, userName, dob, profilePhoto } = student;

const { resume, linkedin, github, mockInterview } = certifications;

const { assignments, projects, assessments } = scores;

const date = new Date(dob);
const newDOB = date.toLocaleDateString("en", {
    year: "numeric",
    day: "2-digit",
    month: "long",
  });

function handleShowMore(e) {
    e.preventDefault();
    setShowMore(!showMore);
}


    return (
        <div>
            <span>{resume && linkedin && github && mockInterview && codewars.current.total > 600 ? "On Track to Graduate" : "Off Track to Graduate"}</span>
            <li>
                <img src={ profilePhoto } alt="profilePhoto" />
                <p>{ preferredName }</p>
                <p>{ userName }</p>
                <p>{ newDOB }</p>
                <a onClick={handleShowMore} href="#">{showMore ? "Show Less" : "Show More"}</a>
                {showMore && <MoreInfo studentArr={studentArr} setStudents={setStudents}certifications={certifications} scores={scores} codewars={codewars} notes={notes} student={student} indx={indx}/>} 
            </li>
        </div>
    )
}