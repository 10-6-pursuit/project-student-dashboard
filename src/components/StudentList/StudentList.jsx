import { useState } from 'react';
import StudentCard from '../StudentCard/StudentCard';
import svg from '../../assets/grid-svgrepo-com.svg';
import './StudentList.scss';

export default function StudentList({ students, addNote }) {
  const [isGridView, setIsGridView] = useState(false);

  function toggleGridView() {
    setIsGridView(!isGridView);
  }

  return (
    <div className="StudentList">
      <div>
        <h2>All Students</h2>
        <div className="flex">
          <p>
            Total Students: <span>{students.length}</span>
          </p>
          <img src={svg} className="grid-icon" onClick={toggleGridView} />
        </div>
      </div>
      <div className={`${isGridView ? 'grid-view' : 'list-view'}`}>
        <ul>
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              addNote={addNote}
              isGridView={isGridView}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
