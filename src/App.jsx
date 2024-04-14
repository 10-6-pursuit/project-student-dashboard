import { useState } from 'react';
import Header from  './Components/Header.jsx'
import CohortPanel from  './Components/CohortPanel.jsx'
import StudentPanel from  './Components/StudentPanel.jsx'
import data from './data/data.json'

// get list of cohorts
const cohortSet = new Set();
const cohortsArr = [];

for (let {cohort} of data){
  const { cohortCode, cohortStartDate } = cohort
  if (!cohortSet.has(cohortCode)) {
    cohortSet.add(cohortCode);
    cohortsArr.push([cohortCode, new Date(cohortStartDate)]);
  }
}
cohortsArr.sort((a, b) => b[1] - a[1]);

function App() {
  const [ studentList, setStudentList ] = useState(data);
  const [ filteredStudentList, setFilteredStudentList ] = useState(studentList);
  const [ selectedCohort, setSelectedCohort ] = useState("All Students")

  function handleCohortSelect(e) {
    const cohortCode = e.target.id
    if (cohortCode === "AllStudents") {
      setSelectedCohort("All Students");
      setFilteredStudentList(studentList);
    } else {
      setSelectedCohort(cohortCode.replace("2", " 2"));
      filterStudentsByCohort(cohortCode);
    }
  }

  function filterStudentsByCohort(cohortQuery) {
    const filteredStudents = studentList.filter(({ cohort }) => cohort.cohortCode === cohortQuery);
    setFilteredStudentList(filteredStudents);
  } 

  return (
    <>
      <Header />
      <main>
        <CohortPanel
          cohorts={cohortsArr}
          handleCohortSelect={handleCohortSelect} />
        <StudentPanel
          selectedCohort={selectedCohort}
          filteredStudentList={filteredStudentList} />
      </main>
    </>
  );
}

export default App;