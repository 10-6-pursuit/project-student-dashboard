export default function Codewars({ codewars }) {
  const {
    current: {
      total: cTotal,
      lastWeek: cLastWeek
    },
    goal: {
      total: gTotal,
      lastWeek: gLastWeek
    }
  } = codewars;

  // percent goal achieved
  const percentGoalAchieved = (cTotal / gTotal * 100).toFixed() 

  return (
    <div className="codewars">
      <h4>CodeWars:</h4>
      <span>
        <span className="green">Current Total: </span>{cTotal}
      </span>
      <br />
      <span>
        <span className="green">Last Week: </span>{cLastWeek}
      </span>
      <br />
      <span>
        <span className="green">Goal: </span>{gTotal}
      </span>
      <br />
      <span>
        <span className="green">Percent of Goal Achieved: </span>{percentGoalAchieved}%
      </span>
      <br />
    </div>
  )
}