import { useState } from "react"
import StudentInfo from "/src/components/StudentInfo.jsx"

export default function StudentList({studentArray, cohort, setDataState, dataState}) {

    const [nameList, setNameList] = useState("Name List")

    const [photoGrid, setPhotoGrid] = useState("Photo Grid")

    const [cardDisplay, setCardDisplay] = useState("block")

    const [listDisplay, setListDisplay] = useState("none")

    const [photoDisplay, setPhotoDisplay] = useState("none")

    function handleViewChange(e) {
        if (e.target.value === "Name List") {
            setListDisplay("block")
            setCardDisplay("none")
            setPhotoDisplay("none")
            setNameList("Card View")
            setPhotoGrid("Photo Grid")
        } else if (e.target.value === "Photo Grid"){
            setPhotoDisplay("block")
            setListDisplay("none")
            setCardDisplay("none")
            setPhotoGrid("Card View")
            setNameList("Name List")
        } else {
            setNameList("Name List")
            setPhotoGrid("Photo Grid")
            setCardDisplay("block")
            setListDisplay("none")
            setPhotoDisplay("none")
        }
    }

    return (
        <div>
            <h2>{cohort}</h2>
            <p>Total Students: <span className="numberOfStudents">{studentArray.length}</span></p>
            <input onClick={handleViewChange}type="button" value={nameList}/><input onClick={handleViewChange} type="button" value={photoGrid}/>
            <ul style={{display:photoDisplay}}>
                {studentArray.map(student => <img key={student.id} src={student.profilePhoto} alt={student.middleName}/>)}
            </ul>
            <ul style={{display:listDisplay}}>
                {studentArray.map(student => <li key={student.id}>{`${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`}</li> )}
            </ul>
            <ul style={{display:cardDisplay}}>
                {studentArray.map(student => <StudentInfo key={student.id} student={student} setDataState={setDataState} dataState={dataState}/>)}
            </ul>
        </div>
    )
}