import Score from './Score.jsx';

export default function Scores({ scores }) {
  const { 
    assignments,
    projects,
    assessments
  } = scores;

  const scoresArr = Object.entries(scores);
  console.log(scoresArr);

  return (
    <ul className="scores">
      <h4>Scores:</h4>
      {scoresArr.map((score) =>(
        <Score score={score} />
      ))}
    </ul>
  )
}