import Header from  './Components/Header.jsx'
import CohortPanel from  './Components/CohortPanel.jsx'
import StudentPanel from  './Components/StudentPanel.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <CohortPanel />
        <StudentPanel />
      </main>
    </>
  );
}

export default App;