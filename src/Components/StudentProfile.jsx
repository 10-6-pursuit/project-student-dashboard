import ShowMore from "./ShowMore";

export default function StudentProfile({
  student,
  notes,
  students,
  studentID,
  appendNotes,
}) {
  const date = new Date(student.dob);
  const formatted = date.toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { resume, linkedin, github, mockInterview } = student.certifications;

  return (
    <li className="student-profile">
      <img src={student.profilePhoto} alt="Profile Image" />
      <div className="student-info">
        <div className="student-name">
          <h3 className="student-info__name">
            {`${student.names.preferredName} ${student.names.middleName} ${student.names.surname} `}
            <span>
              {resume &&
              linkedin &&
              github &&
              mockInterview &&
              student.codewars.current.total > 600
                ? "On Track to Graduate"
                : "Off Track to Graduate"}
            </span>
          </h3>
        </div>
        <h3>{student.username}</h3>
        <h3>
          <span>Birthday:</span> {formatted}
        </h3>
        <ShowMore
          student={student}
          studentID={studentID}
          notes={notes}
          students={students}
          appendNotes={appendNotes}
        />
      </div>
    </li>
  );
}
