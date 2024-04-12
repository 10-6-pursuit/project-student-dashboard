import StudentsData from "./data/data.json"
import Header from "./Components/Header";
import "./App.css"

function App() {
  
  

  return (
    <div>
      <Header />
      <main>
      {/* {StudentsData.map(student => <li> {student.names.preferredName} {student.names.middleName[1].toUpperCase()}. {student.names.surname}</li>)} */}
      </main>
    </div>
  );
}

export default App;
