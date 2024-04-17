import React, { useState } from 'react';
import Studentdetails from './Studentdetails';

function Student({ student }) {

    let fullName = `${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`;


    return (
        <div className='student__card'>
            <div className='student__card-img'>
                <img src={student.profilePhoto} alt={student.names.preferredName} />
            </div>
            <div className='student__card-info'>
                <div className='student__card-fullName'>{fullName}</div>
                <div className='student__card-email'>{student.userName}</div>
                <div className='student__card-birthday'>{student.dob}</div>
            </div>
            {/* <Studentdetails/> */}


        </div>

    );
}

export default Student;










































// const Student = ({ student, toggleDetails }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleClick = () => {
//     setShowDetails(!showDetails);
//     toggleDetails();
// 