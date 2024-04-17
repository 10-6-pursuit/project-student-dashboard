import Student from "./Student";



function StudentList({ students, setStudents }) {


    return (
      <div>
        <p>Student List</p>
        <p>Total Students:{students.length}</p>
        <ul>
        {students.map((student) => (
          <Student
            studentArray={students}
            student={student}
            setStudents={setStudents}
            key={student.id}
          />
        ))}
        </ul>
      </div>
    );
  }
export default StudentList;  