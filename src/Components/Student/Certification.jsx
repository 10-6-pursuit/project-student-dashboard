export default function Certification({ cert }) {
  const [ category, isComplete ] = cert;
  const categoryDisplay = category[0].toUpperCase()+category.slice(1);

  return (
    <li className={category} >
      <span className="green">{categoryDisplay}: </span>{isComplete ? "✅" : "❌"}
    </li>
  )
}