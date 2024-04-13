import StudentProfile from "./StudentProfile";

// Make All Students h2 dynamic
export default function CohortList({students, cohort}) {
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
              name= {`${student.names.preferredName} ${student.names.middleName} ${student.names.surname} `}
              username={student.username}
              dob={student.dob}
              image={student.profilePhoto}
              student={student}
              //Key into extras
              codewars={student.codewars}
              certifications={student.certifications}
              scores={student.cohort.scores}
              notes={student.notes}
            />
          )
        })}
      </ul>
    </div>
  )
}