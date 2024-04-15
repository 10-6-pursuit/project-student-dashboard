import ShowMore from "./ShowMore";

//add extras after student, this comment here is for reference, if doesn't work refer back to this.
export default function StudentProfile({
  name,
  username,
  dob,
  image,
  student,
  codewars,
  certifications,
  scores,
  notes,
  students
}) {

  const date = new Date(dob)
  const formatted = date.toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  const { resume, linkedin, github, mockInterview } = certifications

  return (
    <li className="student-profile">
      <img src={image} alt="Profile Image" />
      <div className="student-info">
        <div className="student-name">
          <h3 className="student-info__name">
            {name}
            <span>
                {resume && linkedin && github && mockInterview && codewars.current.total > 600
                ? "On Track to Graduate"
                : "Off Track to Graduate"}
            </span>
          </h3>
        </div>
        <h3>{username}</h3>
        <h3>
          <span>Birthday:</span> {formatted}
        </h3>
        <ShowMore
          student={student}
          codewars={codewars}
          certifications={certifications}
          scores={scores}
          notes={notes}
          students={students}
        />
      </div>
    </li>
  );
}
