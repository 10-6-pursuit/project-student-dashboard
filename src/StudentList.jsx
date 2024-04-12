import Student from "./Student.jsx"

export default function studentList({students}){

    return(
        <>
        <p>Student List</p>
        <ul>
            {students.map((student) => <Student student={student} />)}
        </ul>
        </>
    )

}