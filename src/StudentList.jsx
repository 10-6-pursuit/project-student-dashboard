import Student from "./Student.jsx"
import { useState } from "react";

export default function studentList({ students, addNote }) {
    //const [studentsState, setStudents] = useState(students);
    return (
        <>
            <ul>
                {students.map((student) => <Student student={student} addNote={addNote} />)}
            </ul>
        </>
    )

}