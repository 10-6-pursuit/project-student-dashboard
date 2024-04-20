import Student from "./Student.jsx";

export default function StudentList({ filteredStudents, addNote }) {
  const cohortName = filteredStudents.length === 250 ? "All Students" : filteredStudents[0].cohort.cohortCode.split(/(\d+)/).join(" ");

  return (
    <div>
      <h1>{cohortName}</h1>
      <p>Total Students: <span>{filteredStudents.length}</span></p>
      {filteredStudents.map(student =>
        <Student addNote={addNote} student={student} key={student.id} />
      )}
    </div>
  );
}
