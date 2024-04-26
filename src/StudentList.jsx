import Student from "./Student.jsx";

export default function StudentList({students, setStudents}) {

    return (
        <>
         <span>Total Students: {students.length}</span>
            <p>StudentList</p>
            <ul className="listOfStudents">
                {students.map((student, indx) => <Student studentArr={students} student={student} setStudents={setStudents} indx={indx} key={student.id}/> 
                )}
            </ul>
        </>
    )
}