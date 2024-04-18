import Certification from './Certification.jsx'

export default function Certifications({ certifications, id } ) {
  const certsArr = Object.entries(certifications);

  return (
    <ul className="certifications">
      <h4>Certifications:</h4>
      {certsArr.map((cert) => (
        <Certification cert={cert} key={id+cert[0]}/>
      ))}
    </ul>
  )
}