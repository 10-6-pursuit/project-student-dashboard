import "./StudentCard.css";

export default function StudentCard({
  firstName,
  middleName,
  lastName,
  email,
  studentPhoto,
  birthDay,
  formatDate,
  student,
  OnTrack,
}) {
  return (
    <div className="card">
      <img src={studentPhoto} alt={`headshot of ${firstName}`} />
      <div>
      <h1>{firstName + " " + middleName[0] + ". " + lastName}</h1>
      <p>{email}</p>
      <p>Birthday: {formatDate(birthDay)}</p>
      <p onLoad={()=>OnTrack(student)}></p>
      <p>Show more...</p>
 
      </div>
    </div>
  );
}