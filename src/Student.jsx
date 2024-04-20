import { useState } from "react";
import MoreInfo from "./MoreInfo.jsx";


export default function Student({ student, addNote }) {

    // const [studentState, setStudent] = useState(student);
    const [showMore, setShowMore] = useState(false);


    function changeDateFormat(date) {

        const localeOptions = { dateStyle: 'long' }

        const dateTimezone = new Date(date).toLocaleString('en-US', localeOptions)
        const dateWithoutTimezone = new Date(new Date(date).toISOString().slice(0, -1)).toLocaleString('en-US', localeOptions)
        return dateTimezone;

    }


    const isStudentOnTrack = student.certifications.resume && student.certifications.linkedin && student.certifications.github && student.certifications.mockInterview && student.codewars.current.total > 600 // --> true/false


    const { id, names: { preferredName, middleName, surname }, username, dob, profilePhoto } = student;
    return (
        <li>

            <div class="solid-border student">
                <div class="student-container">
                    <div class="image">
                        <img src={profilePhoto} alt={`${preferredName}'s headshot`} />
                    </div>
                    <div class="text">

                        <strong><div>{preferredName} {middleName[0].toUpperCase()}. {surname}</div></strong>
                        <div>{username}</div>
                        <div>Birthday: {changeDateFormat(dob)}</div>
            
                        <div>
                            <a onClick={() => setShowMore(!showMore)}href="#">{showMore ? "show Less" : "show More"}</a>
                           </div>
                    </div>

                    <div class="on-track">{isStudentOnTrack && <p>On Track to Graduate</p>}</div>
                </div>
                <div> {showMore && <MoreInfo student={student} addNote={addNote} />}</div>
            </div>



        </li>
    )
}

// true && true && true && true && true // --> true
// true && true && false && true && true // --> false