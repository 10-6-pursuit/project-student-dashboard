// import { useState } from 'react';
// import CohortList from "./Components/CohortList.jsx"
// import StudentList from  './Components/StudentList.jsx'
// import studentInfoArray from './data/data.json'




// function App() {
//   const [students, setStudents] = useState(studentInfoArray);
//   const [filteredStudents, setFilteredStudents] = useState(students);
//   const [cohort, setCohort] = useState("All Students");
//   const [studentTotal, setStudentTotal] = useState (filteredStudents.length);


//   function filterStudents(e){
//     if(e.target.id === "allstudents"){
//       setFilteredStudents(students);
//     } else {
//       setFilteredStudents(students.filter(student => student.cohort.cohortCode === e.target.id))};
//   }

  
//   function addNote(studentID, comment) {
//     students.map((student) => student.id === studentID ? student.notes.push(comment) : null);
//   }


//   return (
  
//     <div>
//       <h1>Student Dashboard</h1>
//       <h3>Total Students: {studentTotal}</h3>


//       <div className="cohorts-pane">
//           <CohortList cohort = {cohort} filterStudents = {filterStudents}
//           />
//       </div>
//         <ul className="students-pane">
//           <StudentList addNote = {addNote} filteredStudents = {filteredStudents}
//           />
//         </ul>
//     </div>  
    
    

  );
}

export default App;
