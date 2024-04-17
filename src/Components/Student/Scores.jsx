import Score from './Score.jsx';

export default function Scores({ scores, id }) {
  const scoresArr = Object.entries(scores);
  
  return (
    <ul className="scores">
      <h4>Scores:</h4>
      {scoresArr.map((score) =>(
        <Score score={score} key={id+score[0]} />
      ))}
    </ul>
  )
}