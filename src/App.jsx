import data from "./data/data.json"
import "/src/index.css"
import Sidebar from "./components/Sidebar";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <Sidebar />
      <ul>
        {data.map(student => (
         <StudentCard student={student}/>
        ))}
      </ul>
    </div>
  );
}




export default App;
