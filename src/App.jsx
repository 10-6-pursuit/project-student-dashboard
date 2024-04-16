import { useState } from "react";
import Header from "./Components/Header";
import ListCohorts from "./Components/ListCohorts";
import Students from "./Components/Students";
import studentsData from "./data/data.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [allStudents] = useState(studentsData);
  const [cohort, setCohort] = useState("All Students");

  function appendNotes(studentNote, studentID) {
    students.map((student) => student.id === studentID ? student.notes.push(studentNote) : null);
  }

  return (
    <>
      <Header />
      <main>
        <ListCohorts
          students={students}
          setStudents={setStudents}
          allStudents={allStudents}
          setCohort={setCohort}
        />
        <Students
          students={students}
          cohort={cohort}
          appendNotes={appendNotes}
        />
      </main>
    </>
  );
}

export default App;
