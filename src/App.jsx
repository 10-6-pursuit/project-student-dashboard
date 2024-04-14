import Header from  './Components/Header.jsx'
import CohortPanel from  './Components/CohortPanel.jsx'
import StudentPanel from  './Components/StudentPanel.jsx'
import data from './data/data.json'

// get list of cohorts
const cohortSet = new Set();
const cohorts = [];

for (let {cohort} of data){
  const { cohortCode, cohortStartDate } = cohort
  if (!cohortSet.has(cohortCode)) {
    cohortSet.add(cohortCode);
    cohorts.push([cohortCode, new Date(cohortStartDate)]);
  }
}

// const cohortName = `${cohortCode.slice(0,-4)} ${cohortCode.slice(-4)}`

function App() {
  return (
    <>
      <Header />
      <main>
        <CohortPanel cohorts={cohorts} />
        <StudentPanel />
      </main>
    </>
  );
}

export default App;