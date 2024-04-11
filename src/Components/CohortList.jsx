import StudentProfile from "./StudentProfile";

export default function CohortList({students}) {

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
              name= {`${student.names.preferredName} ${student.names.middleName} ${student.names.surname} `} //this might cause issues, it did
              username={student.username}
              dob={student.dob}
              image={student.profilePhoto}
              student={student}
              // Show More... component goes here
            />
          )
        })}
      </ul>
    </div>
  )
}