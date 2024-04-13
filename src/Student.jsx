import { useState } from "react";
import MoreInfo from "./MoreInfo.jsx";

export default function Student({student}) {

const [showMore, setShowMore] = useState(false);

const { notes, certifications, cohort:{scores}, codewars, id, names:{ preferredName, middleName, surname }, userName, dob, profilePhoto} = student;

    return (
        <li>
            <div>
                <img src={ profilePhoto } alt="profilePhoto" />
            </div>
            <p>{ preferredName }</p>
            <p>{ userName }</p>
            <p>{ dob }</p>
            <a onClick={() => setShowMore(!showMore)} href="#">{showMore ? "Show Less" : "Show More"}</a>
            {showMore && <MoreInfo certifications={certifications} cohort={cohort} codewars={codewars} notes={notes} />} 
        </li>
    )
}