export default function Cohort ({cohort}) {
    return (
        <li className="cohort-date">
            <button id={cohort}> {`${cohort}`} </button>
            <hr/>
        </li>
    )
}