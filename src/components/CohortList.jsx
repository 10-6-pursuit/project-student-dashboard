export default function CohortList({cohortSelection, handleCohortChange}) {

    return (
        <div>
            <h3>Choose A Class by Start Date</h3>
            {cohortSelection.map((cohort,i) => <li key={i}><input type="button" onClick={handleCohortChange} value={cohort} /></li>)}
        </div>
    )
}