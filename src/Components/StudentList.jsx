import Student from "./Student";
import Studentdetails from "./Studentdetails";



function StudentList({ students, setStudents }) {


    return (
      <div className="studentList__card">
        <p><b>All Students</b></p>
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
          {/* <Studentdetails/> */}
        </ul>
      </div>
    );
  }
export default StudentList;  