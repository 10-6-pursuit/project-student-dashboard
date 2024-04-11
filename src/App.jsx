import CohortList from "./CohortList.jsx";
import StudentList from "./StudentList.jsx";
import studentsData from "./data/data.json"; 

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList />
      <StudentList />
    </div>
  );
}

export default App;
