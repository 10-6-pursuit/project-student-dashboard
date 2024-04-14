export default function Score({ score }) {
  const [ category, categoryScore ] = score;
  const categoryDisplay = category[0].toUpperCase()+category.slice(1);
  const scoreAsPercent = (categoryScore * 100).toFixed()+"%"

  return (
    <li>
      <span className="green">{categoryDisplay}: </span>{scoreAsPercent}
    </li>
  )
}