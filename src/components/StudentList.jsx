import StudentInfo from "/src/components/StudentInfo.jsx"

export default function StudentList({data, cohort}) {

    return (
        <div>
            <h2>{cohort}</h2>
            <p>Total Students: <span>{data.length}</span></p>
            <ul>
                {data.map(student => <StudentInfo student={student}/>)}
            </ul>
        </div>

    )
}