import Header from  './Components/Header.jsx'
import CohortPanel from  './Components/CohortPanel.jsx'
import StudentList from  './Components/StudentList.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <CohortPanel />
        <StudentList />
      </main>
    </>
  );
}

export default App;