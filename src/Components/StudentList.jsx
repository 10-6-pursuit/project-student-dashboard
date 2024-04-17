import Student from "./Student.jsx";
import "./StudentList.css";


export default function StudentList({data, currentCohort}) {
    let newList;

    if (currentCohort === "All Students") {
        newList = data;
    } else {
        newList = data.filter(obj => obj.cohort.cohortCode === currentCohort.split(" ").join(""));
    }

    function totalStudents(arr, currentCohort) {
        let newArr;
        if (currentCohort === "All Students") {
            newArr = data
        } else {
            newArr = arr.filter(obj => obj.cohort.cohortCode === currentCohort.split(" ").join(""));
        }
        return newArr.length;
    }

    return (
        <div className="student-list">
            <h2>{currentCohort}</h2>
            <h3>Total Students: <span>{totalStudents(data, currentCohort)}</span></h3>
            {/* <Student data={data} currentCohort={currentCohort}/> */}
            <ul>{newList.map(student => <Student student={student}/>)}</ul>
        </div>
    )
};