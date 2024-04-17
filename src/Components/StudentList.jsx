import Student from "./Student.jsx"

export default function AllStudents({filteredStudents,addNote}){
    return(
        <div>
            <h1>{filteredStudents.length >= 250 ? "All Students" : filteredStudents[0].cohort.cohortCode.split(/(\d+)/).join(" ")}</h1>
            <p>Total Students: <span>{filteredStudents.length}</span></p>
            {
            filteredStudents.map(student => 
            <Student addNote = {addNote} student = {student} key = {student.id}
            />)
            }
        </div>
    )
}