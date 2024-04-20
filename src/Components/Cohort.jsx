export default function Cohort ({cohort, changeCohort}) {

    return (
        <li className="cohort-date">
            <button id={cohort} onClick={changeCohort}> {cohort.replace("2", " 2")} </button>
            <hr/>
        </li>
    )
}