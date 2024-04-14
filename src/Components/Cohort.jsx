export default function Cohort({ cohortCode }) {

  return (
    <div>
        <h3 className="cohort-name">{cohortCode.replace("2", " 2")}</h3>
        <hr />
    </div>
  )
}