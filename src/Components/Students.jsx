import StudentProfile from "./StudentProfile";

export default function Students({ students, cohort, appendNotes }) {
  return (
    <div className="cohort-list">
      <h2>{cohort}</h2>
      <h3>
        Total Students: <span>{students.length}</span>
      </h3>
      <ul>
        {students.map((student) => {
          return (
            <StudentProfile
              key={student.id}
              student={student}
              notes={student.notes}
              students={students}
              studentID={student.id}
              appendNotes={appendNotes}
            />
          );
        })}
      </ul>
    </div>
  );
}
