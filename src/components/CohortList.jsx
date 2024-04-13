export default function CohortList({cohortSelection}) {
    return (
        <div>
            <h2>Choose A Class by Start Date</h2>
            {cohortSelection.map(cohort => <li>{cohort}</li>)}
        </div>
    )
}