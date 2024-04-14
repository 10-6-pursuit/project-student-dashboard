import Cohort from './Cohort.jsx'

export default function Cohorts({ cohorts }) {
  console.log(`Cohorts`, cohorts)
  return (
    <div className="cohort-list">
      {cohorts.map(([ cohortCode ]) => (
        <Cohort cohortCode={cohortCode} key={cohortCode} />
      ))}
    </div>
  )
}