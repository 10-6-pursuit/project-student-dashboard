import StudentInfo from "/src/components/StudentInfo.jsx"

export default function StudentList({studentArray, cohort}) {

    return (
        <div>
            <h2>{cohort}</h2>
            <p>Total Students: <span className="numberOfStudents">{studentArray.length}</span></p>
            <ul>
                {studentArray.map(student => <StudentInfo student={student}/>)}
            </ul>
        </div>

    )
}