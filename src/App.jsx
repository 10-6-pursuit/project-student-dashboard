import CohortList from "./Components/CohortList";
import Header from "./Components/Header";
import ListCohorts from "./Components/ListCohorts";

function App() {
  return (
    <>
      <Header />
      <main>
        <ListCohorts />
        <CohortList />
      </main>
    </>
  );
}

export default App;
