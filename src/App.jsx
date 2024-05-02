import { useState } from "react";
import Header from "./Components/Header";
import ListCohorts from "./Components/ListCohorts";
import Students from "./Components/Students";
import studentsData from "./data/data.json";



function App() {
  const [students, setStudents] = useState(studentsData);
  const [allStudents] = useState(studentsData);
  const [cohort, setCohort] = useState("All Students");
  const [theme, setTheme] = useState("light");

  function appendNotes(studentNote, studentID) {
    students.map((student) => student.id === studentID ? student.notes.push(studentNote) : null);
    //Wierd it worked before but I have to make this perma so we need to setStudents
    setStudents([...students]);
  }

  return (
    <div className={theme}>
      <Header />
      <main>
        <ListCohorts
          students={students}
          setStudents={setStudents}
          allStudents={allStudents}
          setCohort={setCohort}
          setTheme={setTheme}
          theme={theme}
        />
        <Students
          students={students}
          cohort={cohort}
          appendNotes={appendNotes}
        />
      </main>
    </div>
  );
}

export default App;
