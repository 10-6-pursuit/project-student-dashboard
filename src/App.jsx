
import CohortList from "./CohortList.jsx";
import StudentList from "./StudentList.jsx";
import studentsData from "./data/data.json";
import { useState } from "react";


function App() {

  const [students, setStudents] = useState(studentsData);
  const [cohortStudents, setCohortStudents] = useState(studentsData);
  const [cohortTitle, setCohortTitle] = useState("All Students");


  //TO ADD NOTE RECEIVED FROM CHILD COMPONENT
  const addNote = (id, commentorName, commentAdded) => {
    let i;
    let newStudents = [...students];
    for (i = 0; i < newStudents.length; i++) {
      if (newStudents[i].id == id)
        break;
    }

    newStudents[i].notes.push({
      "commenter": commentorName,
      "comment": commentAdded
    });
    setStudents(newStudents);
  }


  //TO FILTER STUDENTS BASED ON THE COHORT CLICK
  const cohortClick = (batch, cohortTitle) => {
    if (batch == "allStudents") {
      setCohortTitle("All Students");
      setCohortStudents(students);
    }
    else {
      setCohortTitle(cohortTitle);

      let newCohortStudents = students.reduce((accumulator, student) => {
        if (student.cohort.cohortCode == batch) {
          accumulator.push(student);
        }
        return accumulator
      }, []);

      setCohortStudents(newCohortStudents);
    }
  }

  return (
    <div>

      <header><h1>Student Dashboard</h1></header>
      <div class="primary-content">
        <div class="sidebar">
          <CohortList cohortStudents={students} cohortClick={cohortClick} />
        </div>
        <div class="main">
          <div class="margin-left-40">
            {cohortTitle}</div>
          <div class="margin-left-40">
            Total Students: {cohortStudents.length} </div>
          <StudentList students={cohortStudents} addNote={addNote} />
        </div>
      </div>

    </div>
  );
}

export default App;
