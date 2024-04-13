import { useState } from "react";
import MoreInfo from "./MoreInfo.jsx";

export default function Student({student}) {

const [showMore, setShowMore] = useState(false);

const { id, names:{ preferredName, middleName, surname }, userName, dob, profilePhoto} = student;

    return (
        <li>
            { profilePhoto }
            { preferredName }
            { userName }
            { dob }
            <a onClick={() => setShowMore(!showMore)} href="#">{showMore ? "Show Less" : "Show More"}</a>
            {showMore && <MoreInfo />}
        </li>
    )
}