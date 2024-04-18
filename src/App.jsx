import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import StudentList from './components/StudentList/StudentList';
import studentsData from "./data/data.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  function addNote(note, student) {
    students.forEach(currentStudent => {
      if (currentStudent.id === student.id) {
        currentStudent.notes.push(note);
      }
    })
    setStudents([...students]);
  }



  console.log(students);
  return (
    <div className="app">
      <Header />
      <main>
        <Sidebar originalArr={studentsData} setStudents={setStudents} />
        <StudentList students={students} setStudents={setStudents} addNote={addNote} />
      </main>
    </div>
  );
}

export default App;

// Add 1-1 section
// Stretch goal