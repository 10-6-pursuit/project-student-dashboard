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
  "id": {
    "ascending": {method: (a, b) => a.id.toLowerCase().localeCompare(b.id.toLowerCase())},
    "descending": {method: (a, b) => b.id.toLowerCase().localeCompare(a.id.toLowerCase())},
  },
  "firstName": {
    "ascending": {method: (a, b) => a.names.preferredName.toLowerCase().localeCompare(b.names.preferredName.toLowerCase())},
    "descending": {method: (a, b) => b.names.preferredName.toLowerCase().localeCompare(a.names.preferredName.toLowerCase())},
  },
  "lastName": {
    "ascending": {method: (a, b) => a.names.surname.toLowerCase().localeCompare(b.names.surname.toLowerCase())},
    "descending": {method: (a, b) => b.names.surname.toLowerCase().localeCompare(a.names.surname.toLowerCase())},
  },
  "codewars": {
    current: { 
      total : {
        "ascending": {method: (a, b) => a.codewars.current.total - b.codewars.current.total},
        "descending": {method: (a, b) => b.codewars.current.total - a.codewars.current.total},
      }
    }
  }
}

function App() {
  const [ studentList, setStudentList ] = useState(data);
  const [ filteredStudentList, setFilteredStudentList ] = useState(studentList);
  const [ selectedCohort, setSelectedCohort ] = useState("All Students")
  const [ sortBy, setSortBy ] = useState("firstName");
  const [ sortDirection, setSortDirection ] = useState("ascending");

  // handle cohort selection
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

  // handle student sorting
  function sortStudents(sortBy, sortDirection) {
    if (sortBy === "codewars") {
      filteredStudentList.sort(sortMethod[sortBy].current.total[sortDirection].method)
    } else {
      filteredStudentList.sort(sortMethod[sortBy][sortDirection].method)
    }
  }

  if (sortBy === "none") {
    
  } else {  
    sortStudents(sortBy, sortDirection);
  }

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
          sortBy={sortBy}
          sortDirection={sortDirection}
          setSortBy={setSortBy}
          setSortDirection={setSortDirection}
          filteredStudentList={filteredStudentList}
          handleAddNote={handleAddNote} />
      </main>
    </>
  );
}

export default App;