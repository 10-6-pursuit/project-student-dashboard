import './Sidebar.scss';

export default function Sidebar({ setStudents, originalArr }) {
  function formatCohort(cohortString) {
    const season = cohortString.match(/[a-z]/gi).join('');
    const year = cohortString.match(/[0-9]/g).join('');
    return `${season} ${year}`;
  }

  function filterByCohort(e) {
    const cohortSelected = formatCohort(e.target.innerText);
    const filteredStudents = originalArr.filter(
      (student) => formatCohort(student.cohort.cohortCode) === cohortSelected
    );
    setStudents(filteredStudents);
    return filteredStudents;
  }

  return (
    <aside className="Sidebar">
      <ul>
        <h2>Choose a Class by Start Date</h2>
        <li onClick={() => setStudents(originalArr)}>All Students</li>
        {originalArr
          .filter(
            (student, index, self) =>
              index ===
              self.findIndex(
                (currentStudent) =>
                  currentStudent.cohort.cohortCode === student.cohort.cohortCode
              )
          )
          .sort(
            (a, b) =>
              new Date(b.cohort.cohortStartDate).getTime() -
              new Date(a.cohort.cohortStartDate).getTime()
          )
          .map((student) => {
            return (
              <li key={student.id} onClick={(e) => filterByCohort(e)}>
                {formatCohort(student.cohort.cohortCode)}
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
