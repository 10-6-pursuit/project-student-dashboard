import ShowMore from "./ShowMore";

//add extras after student, this comment here is for reference, if doesn't work refer back to this.
export default function StudentProfile({name, username, dob, image, student, codewars, certifications, scores}) {

  return (
    <li className="student-profile">
      <img src={image} alt="Profile Image" />
      <div className="student-info">
        <h3 className="student-info__name">{name}</h3>
        <h3>{username}</h3>
        <h3><span>Birthday:</span> {dob}</h3>
        <ShowMore student={student} codewars={codewars} certifications={certifications} scores={scores}/>
      </div>
    </li>
  )
}