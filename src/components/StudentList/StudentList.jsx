import StudentCard from '../StudentCard/StudentCard';
import './StudentList.scss';

export default function StudentList({students, addNote}) {
  return (
    <div className="StudentList">
      <h2>All Students</h2>
      <p>
        Total Students: <span>{students.length}</span>
      </p>
      <ul>
        {students.map(student => <StudentCard key={student.id} student={student} addNote={addNote}/>)}
      </ul>
    </div>
  );
}
