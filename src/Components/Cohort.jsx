export default function Cohort({
  cohort,
  setStudents,
  allStudents,
  setCohort,
}) {
  function handleClick(e) {
    const text = e.target.textContent.replace(" ", "");
    handleFilter(text);
    setCohort(cohort);
  }

  function handleFilter(text) {
    const filteredCohort = allStudents.filter(
      (student) => student.cohort.cohortCode === text
    );

    setStudents(filteredCohort);
    console.log(filteredCohort);
  }

  return (
    <div className="cohort">
      <li onClick={handleClick}>{cohort}</li>
      <hr />
    </div>
  );
}
