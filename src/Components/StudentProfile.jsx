import ShowMore from "./ShowMore";

export default function StudentProfile({name, username, dob, image, student}) {

  return (
    <li className="student-profile">
      <img src={image} alt="Profile Image" />
      <div className="student-info">
        <h3 className="student-info__name">{name}</h3>
        <h3>{username}</h3>
        <h3><span>Birthday:</span> {dob}</h3>
        <ShowMore student={student}/>
      </div>
    </li>
  )
}