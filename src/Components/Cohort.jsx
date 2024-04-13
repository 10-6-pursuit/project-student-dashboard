export default function Cohort({cohort, setStudents, allStudents}) {

  function handleClick(e) {
    const text = e.target.textContent.replace(" ", "");
    console.log(text);

    handleFilter(text);
  }

  function handleFilter(text) {
    const filteredCohort = allStudents.filter(student => student.cohort.cohortCode === text);
    
    setStudents(filteredCohort);
    console.log(filteredCohort);
  }


  return (
    <div className="cohort">
      <li onClick={handleClick}>{cohort}</li>
      <hr/>
    </div>
  )
}