import StudentProfile from "./StudentProfile";

export default function CohortList({students}) {

// Have to make below dynamic:
  return (
    <div className="cohort-list">
      <h2>All Students</h2>
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
            />
          )
        })}
      </ul>
    </div>
  )
}