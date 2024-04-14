import Cohort from './Cohort.jsx'

export default function Cohorts({ cohorts, selectedCohort ,handleCohortSelect }) {

  return (
    <div className="cohort-list">
      {cohorts.map(([ cohortCode, cohortName ]) => (
        <Cohort
          cohortCode={cohortCode}
          cohortName={cohortName}
          selectedCohort={selectedCohort}
          handleCohortSelect={handleCohortSelect}
          key={cohortCode} />
      ))}
    </div>
  )
}