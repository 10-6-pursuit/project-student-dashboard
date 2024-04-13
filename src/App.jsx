import Header from  './Components/Header.jsx'
import CohortList from  './Components/CohortList.jsx'
import StudentList from  './Components/StudentList.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <CohortList />
        <StudentList />
      </main>
    </>
  );
}

export default App;