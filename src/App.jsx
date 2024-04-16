import { useState } from 'react';
import Header from  './Components/Header.jsx'
import CohortPanel from  './Components/CohortPanel.jsx'
import StudentPanel from  './Components/StudentPanel.jsx'
import data from './data/data.json'


// get list of cohorts
const cohortSet = new Set();
const cohortsArr = [];

// student id map
const idIndexMap = {};
let i = 0;

for (let {cohort, id } of data){
  const { cohortCode, cohortStartDate } = cohort
  if (!cohortSet.has(cohortCode)) {
    cohortSet.add(cohortCode);
    cohortsArr.push([cohortCode, new Date(cohortStartDate)]);
  }

  // populate idIndexMap
  idIndexMap[id] = i;
  i++;
}
cohortsArr.sort((a, b) => b[1] - a[1]);
const cohortSymbols = {
  "Spring": "🌻",
  "Summer": "☀️",
  "Fall": "🍂",
  "Winter": "❄️"
}

const sortMethod = {
  "none": {
    "ascending": {method: (a, b) => null},
    "descending": {method: (a, b) => null}
    },
  "firstName": {
    "ascending": {method: (a, b) => a.names.preferredName.toLowerCase().localeCompare(b.names.preferredName.toLowerCase())},
    "descending": {method: (a, b) => b.names.preferredName.toLowerCase().localeCompare(a.names.preferredName.toLowerCase())},
  }
}

function App() {
  const [ studentList, setStudentList ] = useState(data);
  const [ filteredStudentList, setFilteredStudentList ] = useState(studentList);
  const [ selectedCohort, setSelectedCohort ] = useState("All Students")
  const [ studentSort, setStudentSort ] = useState(filteredStudentList);
  const [ sortBy, setSortBy ] = useState("none");
  const [ sortDirection, setSortDirection ] = useState(undefined);

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

  // update student note
  function handleAddNote(studentId, newNote) {
    studentList[idIndexMap[studentId]].notes.push(newNote);
    setStudentList([...studentList]);
  }

  console.log(sortBy, sortDirection)

  return (
    <>
      <Header />
      <main>
        <CohortPanel
          cohorts={cohortsArr}
          selectedCohort={selectedCohort}
          cohortSymbols={cohortSymbols}
          handleCohortSelect={handleCohortSelect} />
        <StudentPanel
          selectedCohort={selectedCohort}
          cohortSymbols={cohortSymbols}
          setSortBy={setSortBy}
          setSortDirection={setSortDirection}
          filteredStudentList={filteredStudentList}
          handleAddNote={handleAddNote} />
      </main>
    </>
  );
}

export default App;