

export default function CohortList({cohortSelection, handleCohortChange}) {

    return (
        <div className="cohortList__card">
            <h2>Choose A Class by Start Date</h2>
            {cohortSelection.map((cohort,i) => <li key={i}><input type="button" onClick={handleCohortChange} value={cohort} /></li>)}
        </div>
    )
}