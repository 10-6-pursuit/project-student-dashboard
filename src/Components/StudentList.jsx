import { useState } from "react"
import Student from "./Student"
export default function StudentList ({students}) {
    return (
        <>
            <div className="student-list">
                {students.map(student => <Student student={student}/>)}
            </div>
        </>
    )
}