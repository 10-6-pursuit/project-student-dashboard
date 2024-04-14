import StudentInfo from "/src/components/StudentInfo.jsx"

export default function StudentList({studentArray, cohort, setDataState, dataState}) {

    return (
        <div>
            <h2>{cohort}</h2>
            <p>Total Students: <span className="numberOfStudents">{studentArray.length}</span></p>
            <ul>
                {studentArray.map((student, i) => <StudentInfo key={i} index={i} student={student} studentArray={studentArray} setDataState={setDataState} dataState={dataState} cohort={cohort}/>)}
            </ul>
        </div>

    )
}