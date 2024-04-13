import Header from  './Components/Header.jsx'
import CohortList from  './Components/CohortList.jsx'
function App() {
  return (
    <>
      <Header />
      <main>
        <CohortList />
        <section className="student-list">studentList</section>
      </main>
    </>
  );
}

export default App;