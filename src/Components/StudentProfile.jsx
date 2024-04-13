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
}) {
  //Do the destructuring for Certifications here as well:
  //Deconstruct certifications object
  const {
    resume: isResume,
    linkedin: isLinked,
    github: isGithub,
    mockInterview: isMockInterview,
  } = certifications;

  //Create function that will display an h1 element with text "On Track to Graduate if all certifications are true"

  return (
    <li className="student-profile">
      <img src={image} alt="Profile Image" />
      <div className="student-info">
        <div className="student-name">
          <h3 className="student-info__name">{name}
            <span>
            {isLinked && isGithub && isMockInterview && isResume
                ? "On Track to Graduate"
                : ""}
            </span>
          </h3>
        </div>
        <h3>{username}</h3>
        <h3>
          <span>Birthday:</span> {dob}
        </h3>
        <ShowMore
          student={student}
          codewars={codewars}
          certifications={certifications}
          scores={scores}
          notes={notes}
        />
      </div>
    </li>
  );
}
