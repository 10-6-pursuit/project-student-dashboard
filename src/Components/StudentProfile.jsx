export default function StudentProfile({name, username, dob, image}) {
  return (
    <li className="student-profile">
      <img src={image} alt="Profile Image" />
      <div className="student-info">
        <h3 className="student-info__name">{name}</h3>
        <h3>{username}</h3>
        <h3><span>Birthday:</span> {dob}</h3>
        <div className="showMore">
          <h3 onClick={something}><span>Show More...</span></h3>
        </div>
      </div>
    </li>
  )
}