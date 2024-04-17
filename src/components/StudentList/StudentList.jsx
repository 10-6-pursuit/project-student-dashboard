import StudentCard from '../StudentCard/StudentCard';
import './StudentList.scss';

export default function StudentList({students}) {
  return (
    <div className="StudentList">
      <h2>All Students</h2>
      <p>
        Total Students: <span>{students.length}</span>
      </p>
      <ul>
        {students.map(student => <StudentCard students={student}/>)}
      </ul>
    </div>
  );
}
