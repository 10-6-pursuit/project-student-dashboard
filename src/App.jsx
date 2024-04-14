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

cohorts.sort((a, b) => b[1] - a[1])

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