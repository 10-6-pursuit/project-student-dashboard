import Certification from './Certification.jsx'

export default function Certifications({ certifications } ) {
  const certsArr = Object.entries(certifications);

  return (
    <ul className="certifications">
      <h4>Certifications:</h4>
      {certsArr.map((cert) => (
        <Certification cert={cert} />
      ))}
    </ul>
  )
}