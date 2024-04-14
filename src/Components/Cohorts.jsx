import Cohort from './Cohort.jsx'

export default function Cohorts({ cohorts, handleCohortSelect={handleCohortSelect} }) {

  return (
    <div className="cohort-list">
      {cohorts.map(([ cohortCode, cohortName ]) => (
        <Cohort
          cohortCode={cohortCode}
          cohortName={cohortName}
          key={cohortCode}
          handleCohortSelect={handleCohortSelect} />
      ))}
    </div>
  )
}