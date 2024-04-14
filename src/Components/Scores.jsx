import Score from './Score.jsx';

export default function Scores({ scores }) {
  const scoresArr = Object.entries(scores);

  return (
    <ul className="scores">
      <h4>Scores:</h4>
      {scoresArr.map((score) =>(
        <Score score={score} />
      ))}
    </ul>
  )
}