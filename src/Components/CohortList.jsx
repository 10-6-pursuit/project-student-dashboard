import Cohort from "./Cohort"
export default function CohortList({students, setStudents, allStudents, setCohort, setNumberOfStudents}) {

    allStudents.sort((a,b) => new Date(b.cohort.cohortStartDate) - new Date(a.cohort.cohortStartDate));

    
    const uniqueCohorts = allStudents.map(student => student.cohort.cohortCode).filter((cohort, index, array ) => array.indexOf(cohort) === index);

    function changeCohort (e) {
        setCohort(e.target.innerText)
        const filteredCohortList = e.target.id ? allStudents.filter(ele => ele.cohort.cohortCode === e.target.id) : allStudents
        setStudents(filteredCohortList)
        setNumberOfStudents(filteredCohortList.length)
    }

    return(
    <>
        <div className="cohortlistcontainer">
            <h2>Choose a Class By Start Date</h2>
            <button className="all-students" onClick={changeCohort}>All Students</button><hr/>
            {uniqueCohorts.map((cohort, i) => <div key={i}><Cohort changeCohort={changeCohort} cohort={cohort} /></div>
            )}
        </div>
    </>
)
}